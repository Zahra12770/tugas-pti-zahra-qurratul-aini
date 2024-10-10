var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tahun2021_1 = new ol.format.GeoJSON();
var features_tahun2021_1 = format_tahun2021_1.readFeatures(json_tahun2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tahun2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tahun2021_1.addFeatures(features_tahun2021_1);
var lyr_tahun2021_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tahun2021_1, 
                style: style_tahun2021_1,
                popuplayertitle: "tahun 2021",
                interactive: true,
    title: 'tahun 2021<br />\
    <img src="styles/legend/tahun2021_1_0.png" /> 1718 - 1734<br />\
    <img src="styles/legend/tahun2021_1_1.png" /> 1734 - 1994<br />\
    <img src="styles/legend/tahun2021_1_2.png" /> 1994 - 27765<br />\
    <img src="styles/legend/tahun2021_1_3.png" /> 27765 - 29074<br />\
    <img src="styles/legend/tahun2021_1_4.png" /> 29074 - 30666<br />'
        });
var format_tahun2022_2 = new ol.format.GeoJSON();
var features_tahun2022_2 = format_tahun2022_2.readFeatures(json_tahun2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tahun2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tahun2022_2.addFeatures(features_tahun2022_2);
var lyr_tahun2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tahun2022_2, 
                style: style_tahun2022_2,
                popuplayertitle: "tahun 2022",
                interactive: true,
    title: 'tahun 2022<br />\
    <img src="styles/legend/tahun2022_2_0.png" /> 2853 - 10609<br />\
    <img src="styles/legend/tahun2022_2_1.png" /> 10609 - 12569<br />\
    <img src="styles/legend/tahun2022_2_2.png" /> 12569 - 14529<br />\
    <img src="styles/legend/tahun2022_2_3.png" /> 14529 - 21854<br />\
    <img src="styles/legend/tahun2022_2_4.png" /> 21854 - 31876<br />'
        });
var format_tahun2023_3 = new ol.format.GeoJSON();
var features_tahun2023_3 = format_tahun2023_3.readFeatures(json_tahun2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tahun2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tahun2023_3.addFeatures(features_tahun2023_3);
var lyr_tahun2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tahun2023_3, 
                style: style_tahun2023_3,
                popuplayertitle: "tahun 2023",
                interactive: true,
    title: 'tahun 2023<br />\
    <img src="styles/legend/tahun2023_3_0.png" /> 1718 - 1734<br />\
    <img src="styles/legend/tahun2023_3_1.png" /> 1734 - 1994<br />\
    <img src="styles/legend/tahun2023_3_2.png" /> 1994 - 27765<br />\
    <img src="styles/legend/tahun2023_3_3.png" /> 27765 - 29074<br />\
    <img src="styles/legend/tahun2023_3_4.png" /> 29074 - 30666<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_tahun2021_1.setVisible(true);lyr_tahun2022_2.setVisible(true);lyr_tahun2023_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_tahun2021_1,lyr_tahun2022_2,lyr_tahun2023_3];
lyr_tahun2021_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_tahun2022_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_tahun2023_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_tahun2021_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'GIS_JM_PST': 'TextEdit', 'GIS_NM_INS': 'TextEdit', });
lyr_tahun2022_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'GIS_JM_PST': 'TextEdit', 'GIS_NM_INS': 'TextEdit', });
lyr_tahun2023_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'GIS_JM_PST': 'TextEdit', 'GIS_NM_INS': 'TextEdit', });
lyr_tahun2021_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_tahun2022_2.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_tahun2023_3.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_tahun2023_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});