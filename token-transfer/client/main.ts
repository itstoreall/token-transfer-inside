// @ts-nocheck
import { readFileSync } from "fs"
import {
  createAssociatedTokenAccount,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token"
import {
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js"
import lo from "buffer-layout"
import BN from "bn.js"

function readKeypairFromPath(path: string): Keypair {
  const data = JSON.parse(readFileSync(path, "utf-8"))
  return Keypair.fromSecretKey(Buffer.from(data))
}

async function getOrCreateAssociatedTokenAccount(
  connection: Connection,
  mint: PublicKey,
  wallet: Keypair
): Promise<PublicKey> {
  const associatedTokenAddress = await getAssociatedTokenAddress(mint, wallet.publicKey)

  // console.log("associatedTokenAddress 1 -->", associatedTokenAddress)
  // console.log("associatedTokenAddress 2 -->", associatedTokenAddress.toBase58())

  if (await connection.getAccountInfo(associatedTokenAddress)) {
    return associatedTokenAddress
  }

  console.log("create associated token account for", wallet.publicKey.toBase58())
  return await createAssociatedTokenAccount(connection, wallet, mint, wallet.publicKey)
}

async function main() {
  const connection = new Connection("https://api.devnet.solana.com", "confirmed")
  // const mint = new PublicKey("CZyEKArwVYSKkv9im3grGNXmggbPfS8YGUovBnzoKQ4s")
  const mint = new PublicKey("D77WLoiZxiFyN8kuzHfGxTjgf6HZ7HPXysK1ZQbK3iK7")
  const programKeypair = readKeypairFromPath(__dirname + "/../devnet/program.json")
  const aliceKeypair = readKeypairFromPath(__dirname + "/../devnet/alice.json")
  const bobKeypair = readKeypairFromPath(__dirname + "/../devnet/bob.json")
  const carolKeypair = readKeypairFromPath(__dirname + "/../devnet/carol.json")
  const aliceTokenPubkey = await getOrCreateAssociatedTokenAccount(connection, mint, aliceKeypair)
  const bobTokenPubkey = await getOrCreateAssociatedTokenAccount(connection, mint, bobKeypair)
  const carolTokenPubkey = await getOrCreateAssociatedTokenAccount(connection, mint, carolKeypair)

  const amount = Buffer.alloc(8) // 10 YSSC
  lo.ns64("value").encode(new BN(10), amount)

  // `approve` from alice to bob
  const approveIx = new TransactionInstruction({
    keys: [
      { pubkey: aliceKeypair.publicKey, isSigner: true, isWritable: true },
      { pubkey: aliceTokenPubkey, isSigner: false, isWritable: true },
      { pubkey: bobTokenPubkey, isSigner: false, isWritable: true },
      { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    ],
    programId: programKeypair.publicKey,
    data: Buffer.of(1, ...amount),
  })

  const resApprove = await sendAndConfirmTransaction(connection, new Transaction().add(approveIx), [
    aliceKeypair,
  ])

  console.log("approve tx", resApprove)

  // `transfer` from alice to carol
  const transferIx = new TransactionInstruction({
    keys: [
      { pubkey: aliceKeypair.publicKey, isSigner: true, isWritable: false },
      { pubkey: aliceTokenPubkey, isSigner: false, isWritable: true },
      { pubkey: carolTokenPubkey, isSigner: false, isWritable: true },
      { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    ],
    programId: programKeypair.publicKey,
    data: Buffer.of(0, ...amount),
  })

  const transferRes = await sendAndConfirmTransaction(
    connection,
    new Transaction().add(transferIx),
    [aliceKeypair]
  )

  console.log("transfer tx", transferRes)
}

main()
  .then(() => process.exit(0))
  .catch((err) => console.error(err))
