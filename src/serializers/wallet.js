export const walletSerializer = (wallet) => {
    return {
        id: wallet.id,
        accountId: wallet.accountId,
        createdAt: wallet.createdAt,
        updatedAt: wallet.updatedAt,
    }
}