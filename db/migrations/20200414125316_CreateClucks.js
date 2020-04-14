
exports.up = function (knex) {
    return knex.schema.createTable("clucks", (table) => {
        table.increments("id");
        table.string("userName");
        table.text("content");
        table.text("imageUrl");
        table.timestamp("updatedAt").defaultTo(knex.fn.now());
        table.timestamp("createdAt").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("clucks");
};
