
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('wells').del(),
    knex('production').del(),

    // Inserts seed entries
    knex('wells').insert(
        {
            //id
            leaseName: 'Cook 16-12', 
            apn: '', 
            field: 'Bonny',
            county: 'Yuma',
            state: 'CO',
            equipment: 'Pumping Unit, Separator, Meter Shed',
            meterType: 'Barton',
            latitude: '',
            longitude: '',
            asDrilledLat: '',
            asDrilledLong: '',
            legals: '',
            coefficient: 0.886,
            plateSize: 0.375
        }
    ),
   knex('wells').insert(
        {
            //id
            leaseName: 'Helling 6-13', 
            apn: '', 
            field: 'Bonny',
            county: 'Yuma',
            state: 'CO',
            equipment: 'Pumping Unit, Separator, Meter Shed',
            meterType: 'Barton',
            latitude: '',
            longitude: '',
            asDrilledLat: '',
            asDrilledLong: '',
            legals: '',
            coefficient: 0.886,
            plateSize: 0.375
        }
    ),
   knex('wells').insert(
        {
            //id
            leaseName: 'Helling 14-13', 
            apn: '', 
            field: 'Bonny',
            county: 'Yuma',
            state: 'CO',
            equipment: 'Pumping Unit, Separator, Meter Shed',
            meterType: 'Barton',
            latitude: '',
            longitude: '',
            asDrilledLat: '',
            asDrilledLong: '',
            legals: '',
            coefficient: 0.396,
            plateSize: 0.25
        }
    ),
   knex('wells').insert(
        {
            //id
            leaseName: 'Helling 8-13', 
            apn: '', 
            field: 'Bonny',
            county: 'Yuma',
            state: 'CO',
            equipment: 'Pumping Unit, Separator, Meter Shed',
            meterType: 'Barton',
            latitude: '',
            longitude: '',
            asDrilledLat: '',
            asDrilledLong: '',
            legals: '',
            coefficient: 0.886,
            plateSize: 0.375
        }
    ),
    knex('wells').insert(
        {
            //id
            leaseName: 'Osmus 4-24', 
            apn: '', 
            field: 'Bonny',
            county: 'Yuma',
            state: 'CO',
            equipment: 'Pumping Unit, Separator, Meter Shed',
            meterType: 'Barton',
            latitude: '',
            longitude: '',
            asDrilledLat: '',
            asDrilledLong: '',
            legals: '',
            coefficient: 0.396,
            plateSize: 0.25
        }
    ),
    knex('wells').insert(
        {
            //id
            leaseName: 'Osmus 9-24', 
            apn: '', 
            field: 'Bonny',
            county: 'Yuma',
            state: 'CO',
            equipment: 'Pumping Unit, Separator, Meter Shed',
            meterType: 'Barton',
            latitude: '',
            longitude: '',
            asDrilledLat: '',
            asDrilledLong: '',
            legals: '',
            coefficient: 0.396,
            plateSize: 0.25
        }
    ),
    knex('wells').insert(
        {
            //id
            leaseName: 'Osmus C4-24', 
            apn: '', 
            field: 'Bonny',
            county: 'Yuma',
            state: 'CO',
            equipment: 'Pumping Unit, Separator, Meter Shed',
            meterType: 'Barton',
            latitude: '',
            longitude: '',
            asDrilledLat: '',
            asDrilledLong: '',
            legals: '',
            coefficient: 0.396,
            plateSize: 0.25
        }
    ),
    knex('wells').insert(
        {
            //id
            leaseName: 'Pfeiler 11-35-1', 
            apn: '', 
            field: 'Bonny',
            county: 'Yuma',
            state: 'CO',
            equipment: 'Pumping Unit, Separator, Meter Shed, Water Tank',
            meterType: 'Barton',
            latitude: '',
            longitude: '',
            asDrilledLat: '',
            asDrilledLong: '',
            legals: '',
            coefficient: 0.396,
            plateSize: 0.25
        }
    ),
    knex('wells').insert(
        {
            //id
            leaseName: 'Pfeiler 4-2-1', 
            apn: '', 
            field: 'Bonny',
            county: 'Yuma',
            state: 'CO',
            equipment: 'Pumping Unit, Separator, Meter Shed, Water Tank',
            meterType: 'Barton',
            latitude: '',
            longitude: '',
            asDrilledLat: '',
            asDrilledLong: '',
            legals: '',
            coefficient: 0.886,
            plateSize: 0.375
        }
    ),

    knex('production').insert(
        {
            //id
            well_id: 1, 
            date: '1/1/16',
            staticPsi: 40,
            diff: 10,
            mcf: 18,
            tubingpsi: 0,
            casingpsi: 18,
            hauls: 0,
            bbls: 5.84,
            inches: 32,
            spm: 4,
            cycle: 12,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 1, 
            date: '1/2/16',
            staticPsi: 40,
            diff: 10,
            mcf: 18,
            tubingpsi: 0,
            casingpsi: 18,
            hauls: 0,
            bbls: 5.84,
            inches: 32,
            spm: 4,
            cycle: 12,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 1, 
            date: '1/3/16',
            staticPsi: 40,
            diff: 10,
            mcf: 18,
            tubingpsi: 0,
            casingpsi: 18,
            hauls: 0,
            bbls: 5.84,
            inches: 32,
            spm: 4,
            cycle: 12,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 1, 
            date: '1/4/16',
            staticPsi: 40,
            diff: 10,
            mcf: 18,
            tubingpsi: 0,
            casingpsi: 18,
            hauls: 0,
            bbls: 5.84,
            inches: 32,
            spm: 4,
            cycle: 12,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 2, 
            date: '1/1/16',
            staticPsi: 33,
            diff: 28,
            mcf: 27,
            tubingpsi: 0,
            casingpsi: 20,
            hauls: 0,
            bbls: 14.6,
            inches: 8,
            spm: 4,
            cycle: 24,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 2, 
            date: '1/2/16',
            staticPsi: 33,
            diff: 28,
            mcf: 27,
            tubingpsi: 0,
            casingpsi: 20,
            hauls: 0,
            bbls: 14.6,
            inches: 8,
            spm: 4,
            cycle: 24,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 2, 
            date: '1/3/16',
            staticPsi: 33,
            diff: 28,
            mcf: 27,
            tubingpsi: 0,
            casingpsi: 20,
            hauls: 0,
            bbls: 14.6,
            inches: 8,
            spm: 4,
            cycle: 24,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 2, 
            date: '1/4/16',
            staticPsi: 33,
            diff: 28,
            mcf: 27,
            tubingpsi: 0,
            casingpsi: 20,
            hauls: 0,
            bbls: 14.6,
            inches: 8,
            spm: 4,
            cycle: 24,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 3, 
            date: '1/1/16',
            staticPsi: 33,
            diff: 66,
            mcf: 18,
            tubingpsi: 0,
            casingpsi: 20,
            hauls: 0,
            bbls: 8.76,
            inches: 35,
            spm: 8,
            cycle: 12,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 3, 
            date: '1/2/16',
            staticPsi: 33,
            diff: 66,
            mcf: 18,
            tubingpsi: 0,
            casingpsi: 20,
            hauls: 1,
            bbls: 8.76,
            inches: 35,
            spm: 8,
            cycle: 12,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 3, 
            date: '1/3/16',
            staticPsi: 33,
            diff: 66,
            mcf: 18,
            tubingpsi: 0,
            casingpsi: 20,
            hauls: 0,
            bbls: 8.76,
            inches: 35,
            spm: 8,
            cycle: 12,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 3, 
            date: '1/4/16',
            staticPsi: 33,
            diff: 66,
            mcf: 18,
            tubingpsi: 0,
            casingpsi: 20,
            hauls: 1,
            bbls: 8.76,
            inches: 35,
            spm: 8,
            cycle: 12,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 4, 
            date: '1/1/16',
            staticPsi: 36,
            diff: 18,
            mcf: 23,
            tubingpsi: 0,
            casingpsi: 23,
            hauls: 0,
            bbls: 1.46,
            inches: 24,
            spm: 6,
            cycle: 24,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 4, 
            date: '1/2/16',
            staticPsi: 36,
            diff: 18,
            mcf: 23,
            tubingpsi: 0,
            casingpsi: 23,
            hauls: 0,
            bbls: 1.46,
            inches: 24,
            spm: 6,
            cycle: 24,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 4, 
            date: '1/3/16',
            staticPsi: 36,
            diff: 18,
            mcf: 23,
            tubingpsi: 0,
            casingpsi: 23,
            hauls: 1,
            bbls: 1.46,
            inches: 24,
            spm: 6,
            cycle: 24,
            hours_on: 24,
            remarks: ''
        }
    ),
    knex('production').insert(
        {
            //id
            well_id: 4, 
            date: '1/4/16',
            staticPsi: 36,
            diff: 18,
            mcf: 23,
            tubingpsi: 0,
            casingpsi: 23,
            hauls: 0,
            bbls: 1.46,
            inches: 24,
            spm: 6,
            cycle: 24,
            hours_on: 24,
            remarks: ''
        }
    )
  );
};

//         knex.schema.createTable('production', function(table){
//             table.increments('id');
//             table.integer('well_id',10);
//             table.date('date', 5);
//             table.integer('static', 50);
//             table.integer('diff');
//             table.integer('mcf');
//             table.integer('tubingpsi');
//             table.integer('casingpsi');
//             table.integer('hauls');
//             table.integer('bbls');
//             table.integer('inches');
//             table.integer('spm');
//             table.integer('cycle');
//             table.integer('hours_on');
//             table.text('remarks');
//         })