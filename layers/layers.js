var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=r&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'school:type_idn': 'school:type_idn', 'office': 'office', 'admin_level': 'admin_level', 'shop': 'shop', 'sport': 'sport', 'leisure': 'leisure', 'ground_floor:height': 'ground_floor:height', 'wheelchair': 'wheelchair', 'opening_hours': 'opening_hours', 'operator:type': 'operator:type', 'religion': 'religion', 'evacuation_center': 'evacuation_center', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'amenity': 'amenity', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'tourism': 'tourism', 'name': 'name', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'school:type_idn': '', 'office': '', 'admin_level': '', 'shop': '', 'sport': '', 'leisure': '', 'ground_floor:height': '', 'wheelchair': '', 'opening_hours': '', 'operator:type': '', 'religion': '', 'evacuation_center': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'amenity': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'tourism': '', 'name': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'school:type_idn': 'no label', 'office': 'no label', 'admin_level': 'no label', 'shop': 'no label', 'sport': 'no label', 'leisure': 'no label', 'ground_floor:height': 'no label', 'wheelchair': 'no label', 'opening_hours': 'no label', 'operator:type': 'no label', 'religion': 'no label', 'evacuation_center': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'tourism': 'no label', 'name': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});