.PHONY: devnet client

init:
	solana airdrop 1 HFtqbwbiAe8CCLeRY44BRUhRzBThApUNJ33RVNuygAD8 -u devnet
	solana airdrop 1 6s542FBTMPvkbq6VHhpjYqkonU5xxnMFkKtLE3CeyfMg -u devnet
	solana airdrop 1 519XT8Wo4zYcJjJxQb9bWXDWpPoYzkohBkwFNUdbwqYB -u devnet

token-account:
	spl-token create-account D77WLoiZxiFyN8kuzHfGxTjgf6HZ7HPXysK1ZQbK3iK7 --owner devnet/alice.json
	spl-token create-account D77WLoiZxiFyN8kuzHfGxTjgf6HZ7HPXysK1ZQbK3iK7 --owner devnet/bob.json

state:
	spl-token account-info --address D7rCqpX5Kdf4cVTU93Ws2UxGFAMNibaNTH5So8CqoYEZ # alice
	spl-token account-info --address 5kBgjavJeSJC9ztWXdpx13oBku9d8LVVphFCnz5vKNkt # bob
	spl-token account-info --address 2Q6MhZUNQm56RrcgyGze3rBT6vTSCeqiXWdgdHT8CM9G # carol

mint:
	spl-token mint D77WLoiZxiFyN8kuzHfGxTjgf6HZ7HPXysK1ZQbK3iK7 1000 D7rCqpX5Kdf4cVTU93Ws2UxGFAMNibaNTH5So8CqoYEZ # mint to alice 300 SPL

deploy:
	cd program; cargo build-bpf
	solana program deploy program/target/deploy/program.so -u devnet --program-id devnet/program.json

client:
	cd client; ./node_modules/.bin/ts-node main.ts

# localnet-validator:
# 	solana-test-validator -r --ledger localnet/ledger

# localnet-init:
# 	solana airdrop 1 CD6To88A4KrApbnDUkHrwpjMY5ufgPpVQzm9rRX5d3ro -ul
# 	solana airdrop 1 CD6To88A4KrApbnDUkHrwpjMY5ufgPpVQzm9rRX5d3ro -ul
# 	solana airdrop 1 2EheLY8aWQcKPsSXpTs7teiwtBume8gLRaFQzB4HHxJP -ul
# 	spl-token create-token localnet/token.json --fee-payer localnet/alice.json -ul
# 	spl-token create-account CZyEKArwVYSKkv9im3grGNXmggbPfS8YGUovBnzoKQ4s --owner localnet/alice.json -ul
# 	spl-token create-account CZyEKArwVYSKkv9im3grGNXmggbPfS8YGUovBnzoKQ4s --owner localnet/bob.json -ul
# 	spl-token mint CZyEKArwVYSKkv9im3grGNXmggbPfS8YGUovBnzoKQ4s 300 G6GTsFAnYP1PaNc1g36SF4iuEiosfTZZCWWdnCNxxA8d -ul # mint to alice 300 SPL

# state:
# 	spl-token account-info --address G6GTsFAnYP1PaNc1g36SF4iuEiosfTZZCWWdnCNxxA8d -ul # alice
# 	spl-token account-info --address 82SyqQyffa3yeUbuCfcfrHGg3LjdKr919aUqVT7uXkez -ul # bob
# 	spl-token account-info --address Eau9odNYvqtAFmAVJx2wcH358gd4PAeshF1X8VEyMHWb -ul # carol

# client:
# 	cd client && npm install && ./node_modules/.bin/ts-node main.ts