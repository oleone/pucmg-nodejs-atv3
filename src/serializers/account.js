export const accountSerializer = (account) => {
    return {
        id: account.id,
        email: account.email,
        fullName: account.fullName,
        wallets: account.wallets,
        createdAt: account.createdAt,
        updatedAt: account.updatedAt,
    }
}