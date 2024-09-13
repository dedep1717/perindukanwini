ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([107.678672, -7.023243, 107.736905, -6.982211]);
var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);
var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_0.png" /> ADMINISTRASIDESA_AR_25K'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UTMVektorWini_2 = new ol.format.GeoJSON();
var features_UTMVektorWini_2 = format_UTMVektorWini_2.readFeatures(json_UTMVektorWini_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UTMVektorWini_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMVektorWini_2.addFeatures(features_UTMVektorWini_2);cluster_UTMVektorWini_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_UTMVektorWini_2
});
var lyr_UTMVektorWini_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UTMVektorWini_2, 
                style: style_UTMVektorWini_2,
                popuplayertitle: "UTM Vektor Wini",
                interactive: true,
                title: '<img src="styles/legend/UTMVektorWini_2.png" /> UTM Vektor Wini'
            });
var format_Sumbersarivektor_3 = new ol.format.GeoJSON();
var features_Sumbersarivektor_3 = format_Sumbersarivektor_3.readFeatures(json_Sumbersarivektor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sumbersarivektor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sumbersarivektor_3.addFeatures(features_Sumbersarivektor_3);
var lyr_Sumbersarivektor_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sumbersarivektor_3, 
                style: style_Sumbersarivektor_3,
                popuplayertitle: "Sumbersari vektor",
                interactive: true,
                title: '<img src="styles/legend/Sumbersarivektor_3.png" /> Sumbersari vektor'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });
var format_Waypoints_5 = new ol.format.GeoJSON();
var features_Waypoints_5 = format_Waypoints_5.readFeatures(json_Waypoints_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Waypoints_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints_5.addFeatures(features_Waypoints_5);
var lyr_Waypoints_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints_5, 
                style: style_Waypoints_5,
                popuplayertitle: "Waypoints",
                interactive: true,
                title: '<img src="styles/legend/Waypoints_5.png" /> Waypoints'
            });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_UTMVektorWini_2.setVisible(true);lyr_Sumbersarivektor_3.setVisible(true);lyr_Buffered_4.setVisible(true);lyr_Waypoints_5.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0,lyr_OpenStreetMap_1,lyr_UTMVektorWini_2,lyr_Sumbersarivektor_3,lyr_Buffered_4,lyr_Waypoints_5];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_UTMVektorWini_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sumbersarivektor_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Buffered_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Waypoints_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_UTMVektorWini_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Sumbersarivektor_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Buffered_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Waypoints_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_UTMVektorWini_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Sumbersarivektor_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Buffered_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Waypoints_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Waypoints_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});