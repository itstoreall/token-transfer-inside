# Tokens transfer inside (Solana)

### Transfer and approve SPL-Tokens inside a Solana on-chain program

- SPL Token
- SPL Associated Token Account Program
- @solana/spl-token (js)
- Solana token registry

### Instruction

```rust
// 0. `[signer]` from authority
// 1. `[writable]` from_token
// 2. `[writable]` to_token
// 3. `[]` token program

pub enum Instruction {
    Transfer { amount: u64 },
    Approve { amount: u64 },
}
```

### Links:

- https://spl.solana.com/token
- https://spl.solana.com/associated-token-account
- https://docs.rs/spl-token/3.1.1/spl_token/index.html
- https://docs.rs/spl-associated-token-account/1.0.2/spl_associated_token_account/
- https://github.com/solana-labs/solana-program-library/tree/master/token/js
- https://github.com/solana-labs/token-list
