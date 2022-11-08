export const up = async (knex) => {
    return knex.schema
        .createTable('accounts', function (table) {
            table.uuid("id")
                .primary();
            table.string('fullName', 255)
                .notNullable();
            table.string('email', 255)
                .notNullable();
            table.string('password', 1000)
                .notNullable();
            table.string('salt', 1000)
                .notNullable();
            table.specificType('wallets', 'text ARRAY')
            table.dateTime("createdAt")
                .defaultTo(knex.raw('NOW()'))
            table.dateTime("updatedAt")
                .defaultTo(knex.raw('NOW()'))
            table.dateTime("deletedAt")
                .nullable();
        })
        .createTable('wallets', function (table) {
            table.uuid("id")
                .primary();
            table.uuid('walletId')
                .notNullable()
                .references("id")
                .inTable("accounts")
                .onDelete("CASCADE");
            table.dateTime("createdAt").defaultTo(knex.raw('NOW()'))
            table.dateTime("updatedAt").defaultTo(knex.raw('NOW()'))
            table.dateTime("deletedAt")
                .nullable();
        });
};

export const down = async (knex) => {
    return knex.schema
        .dropTable("accounts")
        .dropTable("wallets");
};
