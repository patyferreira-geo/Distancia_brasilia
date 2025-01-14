ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-90.622654, -30.785195, -23.485734, 4.128449]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UnidadesFederativas_1 = new ol.format.GeoJSON();
var features_UnidadesFederativas_1 = format_UnidadesFederativas_1.readFeatures(json_UnidadesFederativas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_UnidadesFederativas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesFederativas_1.addFeatures(features_UnidadesFederativas_1);
var lyr_UnidadesFederativas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesFederativas_1, 
                style: style_UnidadesFederativas_1,
                popuplayertitle: 'Unidades Federativas',
                interactive: true,
    title: 'Unidades Federativas<br />\
    <img src="styles/legend/UnidadesFederativas_1_0.png" /> Acre<br />\
    <img src="styles/legend/UnidadesFederativas_1_1.png" /> Alagoas<br />\
    <img src="styles/legend/UnidadesFederativas_1_2.png" /> Amapá<br />\
    <img src="styles/legend/UnidadesFederativas_1_3.png" /> Amazonas<br />\
    <img src="styles/legend/UnidadesFederativas_1_4.png" /> Bahia<br />\
    <img src="styles/legend/UnidadesFederativas_1_5.png" /> Ceará<br />\
    <img src="styles/legend/UnidadesFederativas_1_6.png" /> Distrito Federal<br />\
    <img src="styles/legend/UnidadesFederativas_1_7.png" /> Espírito Santo<br />\
    <img src="styles/legend/UnidadesFederativas_1_8.png" /> Goiás<br />\
    <img src="styles/legend/UnidadesFederativas_1_9.png" /> Maranhão<br />\
    <img src="styles/legend/UnidadesFederativas_1_10.png" /> Mato Grosso<br />\
    <img src="styles/legend/UnidadesFederativas_1_11.png" /> Mato Grosso do Sul<br />\
    <img src="styles/legend/UnidadesFederativas_1_12.png" /> Minas Gerais<br />\
    <img src="styles/legend/UnidadesFederativas_1_13.png" /> Pará<br />\
    <img src="styles/legend/UnidadesFederativas_1_14.png" /> Paraíba<br />\
    <img src="styles/legend/UnidadesFederativas_1_15.png" /> Paraná<br />\
    <img src="styles/legend/UnidadesFederativas_1_16.png" /> Pernambuco<br />\
    <img src="styles/legend/UnidadesFederativas_1_17.png" /> Piauí<br />\
    <img src="styles/legend/UnidadesFederativas_1_18.png" /> Rio de Janeiro<br />\
    <img src="styles/legend/UnidadesFederativas_1_19.png" /> Rio Grande do Norte<br />\
    <img src="styles/legend/UnidadesFederativas_1_20.png" /> Rio Grande do Sul<br />\
    <img src="styles/legend/UnidadesFederativas_1_21.png" /> Rondônia<br />\
    <img src="styles/legend/UnidadesFederativas_1_22.png" /> Roraima<br />\
    <img src="styles/legend/UnidadesFederativas_1_23.png" /> Santa Catarina<br />\
    <img src="styles/legend/UnidadesFederativas_1_24.png" /> São Paulo<br />\
    <img src="styles/legend/UnidadesFederativas_1_25.png" /> Sergipe<br />\
    <img src="styles/legend/UnidadesFederativas_1_26.png" /> Tocantins<br />\
    <img src="styles/legend/UnidadesFederativas_1_27.png" /> <br />'
        });
var format_Capitais_2 = new ol.format.GeoJSON();
var features_Capitais_2 = format_Capitais_2.readFeatures(json_Capitais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Capitais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capitais_2.addFeatures(features_Capitais_2);
var lyr_Capitais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Capitais_2, 
                style: style_Capitais_2,
                popuplayertitle: 'Capitais ',
                interactive: true,
                title: '<img src="styles/legend/Capitais_2.png" /> Capitais '
            });
var format_Brasilia_3 = new ol.format.GeoJSON();
var features_Brasilia_3 = format_Brasilia_3.readFeatures(json_Brasilia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Brasilia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brasilia_3.addFeatures(features_Brasilia_3);
var lyr_Brasilia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brasilia_3, 
                style: style_Brasilia_3,
                popuplayertitle: 'Brasilia',
                interactive: true,
                title: '<img src="styles/legend/Brasilia_3.png" /> Brasilia'
            });
var format_distacia_capitais_brasilia_4 = new ol.format.GeoJSON();
var features_distacia_capitais_brasilia_4 = format_distacia_capitais_brasilia_4.readFeatures(json_distacia_capitais_brasilia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_distacia_capitais_brasilia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distacia_capitais_brasilia_4.addFeatures(features_distacia_capitais_brasilia_4);
var lyr_distacia_capitais_brasilia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_distacia_capitais_brasilia_4, 
                style: style_distacia_capitais_brasilia_4,
                popuplayertitle: 'distacia_capitais_brasilia',
                interactive: true,
    title: 'distacia_capitais_brasilia<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_0.png" /> Capital mais próxima (179 km)<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_1.png" /> 616<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_2.png" /> 620<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_3.png" /> 871<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_4.png" /> 881<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_5.png" /> 930<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_6.png" /> 945<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_7.png" /> 1058<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_8.png" /> 1081<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_9.png" /> 1289<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_10.png" /> 1306<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_11.png" /> 1310<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_12.png" /> 1485<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_13.png" /> 1519<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_14.png" /> 1586<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_15.png" /> 1615<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_16.png" /> 1654<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_17.png" /> 1682<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_18.png" /> 1767<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_19.png" /> 1900<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_20.png" /> 2252<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_21.png" /> <br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_22.png" /> 1933<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_23.png" /> Capital mais distante (2493 km)<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_24.png" /> 1785<br />\
    <img src="styles/legend/distacia_capitais_brasilia_4_25.png" /> 1712<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_UnidadesFederativas_1.setVisible(true);lyr_Capitais_2.setVisible(true);lyr_Brasilia_3.setVisible(true);lyr_distacia_capitais_brasilia_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_UnidadesFederativas_1,lyr_Capitais_2,lyr_Brasilia_3,lyr_distacia_capitais_brasilia_4];
lyr_UnidadesFederativas_1.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'geometriaaproximada': 'geometriaaproximada', 'sigla': 'sigla', 'geocodigo': 'geocodigo', });
lyr_Capitais_2.set('fieldAliases', {'id': 'id', 'geometriaaproximada': 'geometriaaproximada', 'nome': 'nome', 'geocodigo': 'geocodigo', 'tipocapital': 'tipocapital', });
lyr_Brasilia_3.set('fieldAliases', {'id': 'id', 'geometriaaproximada': 'geometriaaproximada', 'nome': 'nome', 'geocodigo': 'geocodigo', 'tipocapital': 'tipocapital', });
lyr_distacia_capitais_brasilia_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'geometriaaproximada': 'geometriaaproximada', 'nome': 'nome', 'geocodigo': 'geocodigo', 'tipocapital': 'tipocapital', 'HubName': 'HubName', 'HubDist': 'HubDist', 'HubDist_km': 'HubDist_km', });
lyr_UnidadesFederativas_1.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'geometriaaproximada': 'TextEdit', 'sigla': 'TextEdit', 'geocodigo': 'TextEdit', });
lyr_Capitais_2.set('fieldImages', {'id': 'TextEdit', 'geometriaaproximada': 'TextEdit', 'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'tipocapital': 'TextEdit', });
lyr_Brasilia_3.set('fieldImages', {'id': '', 'geometriaaproximada': '', 'nome': '', 'geocodigo': '', 'tipocapital': '', });
lyr_distacia_capitais_brasilia_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'geometriaaproximada': 'TextEdit', 'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'tipocapital': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', 'HubDist_km': 'TextEdit', });
lyr_UnidadesFederativas_1.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'geometriaaproximada': 'no label', 'sigla': 'inline label - always visible', 'geocodigo': 'no label', });
lyr_Capitais_2.set('fieldLabels', {'id': 'no label', 'geometriaaproximada': 'no label', 'nome': 'inline label - always visible', 'geocodigo': 'no label', 'tipocapital': 'no label', });
lyr_Brasilia_3.set('fieldLabels', {'id': 'no label', 'geometriaaproximada': 'no label', 'nome': 'inline label - always visible', 'geocodigo': 'no label', 'tipocapital': 'no label', });
lyr_distacia_capitais_brasilia_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'geometriaaproximada': 'no label', 'nome': 'inline label - always visible', 'geocodigo': 'no label', 'tipocapital': 'no label', 'HubName': 'no label', 'HubDist': 'no label', 'HubDist_km': 'inline label - always visible', });
lyr_distacia_capitais_brasilia_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});