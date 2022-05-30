/*

alice.json: 
[18,199,0,82,200,98,15,136,89

bob.json:
[161,66,197,110,100,80,131,239

carol.json:
[112,67,144,227,236,226,250,70

program.json:
[228,144,140,213,76,96,23,2,207

token.json:
[124,254,89,26,159,58,63,30,179

---

mkdir solana-wallet
solana-keygen new --outfile solana-wallet/...-keypair.json

alice-keypair.json: [117,31,52,43
pubkey: HFtqbwbiAe8CCLeRY44BRUhRzBThApUNJ33RVNuygAD8
token acc: D7rCqpX5Kdf4cVTU93Ws2UxGFAMNibaNTH5So8CqoYEZ
<BN: b40d5d013d8b6cdadbe4e10f04d4f235ec1e7c7ecd95384141ef52855fe9de3e>
=================================================================================
consider analyst grape settle rabbit tobacco person feed fragile bike find figure

bob-keypair.json: [193,70,150,149
pubkey: 6s542FBTMPvkbq6VHhpjYqkonU5xxnMFkKtLE3CeyfMg
token acc: 5kBgjavJeSJC9ztWXdpx13oBku9d8LVVphFCnz5vKNkt
<BN: 467ecddc821b20eae91fa668a48f18adf8b5e94a6eda948149b0addeccdceb45>
=============================================================================
fury mobile casino surprise rubber derive grit direct dial today into chuckle

carol-keypair.json: [125,108,88,198
pubkey: 519XT8Wo4zYcJjJxQb9bWXDWpPoYzkohBkwFNUdbwqYB
token acc: 2Q6MhZUNQm56RrcgyGze3rBT6vTSCeqiXWdgdHT8CM9G
<BN: 14c61a42ef096e58bff484fdc285ba15ca4ebf2b8db4ceee340dc0e0b5f79717>
=====================================================================
pigeon until announce salad cushion tag law ill volume sad coral tilt

program-keypair.json: [181,98,193,181
pubkey: 3gp7PimNrSFweb44BNJB88CS1sD2pVfUnSdiVC4mv9cU
=========================================================================
night assist nice ramp sword robot forest series box result disagree stem

token-keypair.json: [232,28,96,113
pubkey: 93bF9fQRUVBmbNcbmb7SCiUpR7GBTsEmad9FGgtqv9LS
===========================================================================
during dirt woman autumn artefact try pitch virtual pact local please comic

---

programKeypair:
  publicKey: Uint8Array(32) [
      39, 234,  75,   7, 108, 181, 230, 110,
    163,  10, 212, 183,  62, 140, 165, 127,
    137, 246,  78, 209, 160, 120,  32, 180,
      81,  46, 216, 239,  37,  39, 210, 209
  ],
  secretKey: Uint8Array(64) [
    181,  98, 193, 181, 237,  58,  24, 235, 167, 161, 181,
      62, 132, 219, 207,  54, 100, 145,  31,  66,  49,  95,
    168, 204, 135,  79,  78, 241,   1,  23, 205, 208,  39,
    234,  75,   7, 108, 181, 230, 110, 163,  10, 212, 183,
      62, 140, 165, 127, 137, 246,  78, 209, 160, 120,  32,
    180,  81,  46, 216, 239,  37,  39, 210, 209
  ]

aliceKeypair:
  publicKey: Uint8Array(32) [
    241, 139, 188,  75, 205, 235,  31, 222,
    234, 233, 119,  15, 136, 210, 185,  70,
    116, 156, 124,  83,  95,  39,  81,  53,
      25,  24, 205, 237, 159,  62, 138,  91
  ],
  secretKey: Uint8Array(64) [
    117,  31,  52,  43,  62,  69,   6,  38, 254, 205,  75,
    102, 115,  42, 208, 237, 120, 215, 224, 113, 187, 238,
      88,   9,  41, 132,  71,  52, 127,  80,  70, 221, 241,
    139, 188,  75, 205, 235,  31, 222, 234, 233, 119,  15,
    136, 210, 185,  70, 116, 156, 124,  83,  95,  39,  81,
      53,  25,  24, 205, 237, 159,  62, 138,  91
  ]

bobKeypair:
  publicKey: Uint8Array(32) [
      87,  30,  14, 138, 162, 123, 105,
      52, 181, 166, 200, 158, 209,  83,
    188, 158, 191, 179, 205, 208,   5,
    244, 161, 187, 243, 197, 100, 142,
    154,  94, 151, 247
  ],
  secretKey: Uint8Array(64) [
    193,  70, 150, 149, 240,  35, 130, 113, 232, 126,
      17,   5, 179,  63, 198, 126, 143, 219,  49,  14,
    252, 153, 185, 106, 130, 100,  47, 149, 197, 184,
    214, 215,  87,  30,  14, 138, 162, 123, 105,  52,
    181, 166, 200, 158, 209,  83, 188, 158, 191, 179,
    205, 208,   5, 244, 161, 187, 243, 197, 100, 142,
    154,  94, 151, 247
  ]

carolKeypair:
  publicKey: Uint8Array(32) [
      59, 120, 99,  16,  11, 106, 103, 118,
    177,  47, 60, 191, 182,  43, 105, 188,
    235,  58, 54,  44,  70, 147,  88, 172,
    115,  41, 56,   4,  64,  47, 244,  32
  ],
  secretKey: Uint8Array(64) [
    125, 108,  88, 198, 184, 156, 208, 195, 132, 149,   0,
      66,  11, 216, 198,  30,  97,  39,  34, 235,  70,  10,
      64,  59,  36,  43, 235, 109, 127, 231,  89,  50,  59,
    120,  99,  16,  11, 106, 103, 118, 177,  47,  60, 191,
    182,  43, 105, 188, 235,  58,  54,  44,  70, 147,  88,
    172, 115,  41,  56,   4,  64,  47, 244,  32
  ]

*/
