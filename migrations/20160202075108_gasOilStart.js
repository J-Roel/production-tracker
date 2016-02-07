
exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('wells', function(table){
            table.increments('id');
            table.string('leaseName', 50);
            table.string('apn', 50);
            table.string('field', 50);
            table.string('county', 50);
            table.string('state', 50);
            table.string('equipment', 255);
            table.string('meterType', 50);
            table.string('latitude', 50);
            table.string('longitude', 50);
            table.string('asDrilledLat', 50);
            table.string('asDrilledLong', 50);
            table.string('legals', 50);
            table.decimal('coefficient', 5, 3);
            table.decimal('plateSize', 5, 3);
        }),

        knex.schema.createTable('production', function(table){
            table.increments('id');
            table.integer('well_id',10);
            table.date('date', 5);
            table.integer('staticPsi', 50);
            table.integer('diff');
            table.integer('mcf');
            table.integer('tubingpsi');
            table.integer('casingpsi');
            table.integer('hauls');
            table.decimal('bbls',5,2);
            table.integer('inches');
            table.integer('spm');
            table.integer('cycle');
            table.integer('hours_on');
            table.text('remarks');
        })
    ]);
};

exports.down = function(knex, Promise) {
   return Promise.all([
      knex.schema.dropTable('wells'),
      knex.schema.dropTable('production')
  ])
};
