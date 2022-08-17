/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tableName", (table) => {
    // "På tabellen" lägger vi till "kolumntypen" med namnet "name"
    // På tabellen, lägger vi till en kolumn av knex-typen "increments"
    // med namnet id. Som ger oss en kolumn med ett id som ökar för varje rad
    // vi lägger till i tabellen.
    table.increments("id");
    // Och en kolumn för namn, av typen string
    table.string("name");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tableName");
};
