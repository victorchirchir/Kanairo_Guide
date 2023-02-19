
//create map container and set view
var map=L.map('map').setView([ -1.286389,36.817223],15);

// Add Open topo base layer
var openTopoMap=L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
 });
//add stamen layer
 var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
})


//add turbo overpass layer

var attr_osm = 'Map data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors';
var attr_overpass = 'POI via <a href="http://www.overpass-api.de/">Overpass API</a>';

var osm = new L.TileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        'opacity': 0.7,
        'attribution': [attr_osm, attr_overpass].join(', ')
    }
).addTo(map);

// var map = new L.Map('map')
// .addLayer(osm)
// .setView(new L.LatLng(52.265, 10.524), 14);


// var opl = new L.OverPassLayer({

//     'query': '(node({{bbox}})[organic];node({{bbox}})[second_hand];);out qt;',
// });



// 




        var attr_osm = 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
            attr_overpass = 'POI via <a href="https://www.overpass-api.de">Overpass API</a>';
       

        

        //icons
        var eateryIcon=L.icon({
            iconUrl:'./Images/eateryIcon3.png',
            iconSize:     [60,40], // size of the icon
         })
         
         var barIcon=L.icon({
            iconUrl:'./Images/amenitybar.png',
            iconSize:     [40,40], // size of the icon
            shadowSize:   [40, 44], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
         })

         var cafeIcon=L.icon({
            iconUrl:'./Images/cafe.png',
            iconSize:     [40,40], // size of the icon
         })

         var fastFoodIcon=L.icon({
            iconUrl:'./Images/fastFood.png',
            iconSize:     [40,40], // size of the icon
         })
         var pubIcon=L.icon({
            iconUrl:'./Images/pub.png',
            iconSize:     [40,40], // size of the icon
         })
         var RestarauntIcon=L.icon({
            iconUrl:'./Images/restaraunt.png',
            iconSize:     [40,40], // size of the icon
         })

        
         
        
        


    //adding feature to customized layer control
    

//ClusterGroup
        const grupo = L.markerClusterGroup();

//arrays to store the different amenities
         var Listbar=[]
             ListRestaraunts=[]
             ListCafe=[]
             ListFastFood=[]
             Listpub=[]


        function formatMarkerInfo(node) {
            var formattedString = "",
                tagName;
            for (tagName in node.tags) {
                if (node.tags.hasOwnProperty(tagName)) {
                    formattedString = formattedString + "<b>" + tagName + "</b>:\t" + node.tags[tagName] + "<br>";
                }
            }
            return formattedString;
        }

            

//amenity pub
        function addAmenities(a,b,c){
        var amenity = new L.OverPassLayer({
            debug: true,
            endPoint: 'https://lz4.overpass-api.de/api/',
            query: `node({{bbox}})["amenity"=${a}];out body;>;out skel qt;`,
            minZoomIndicatorOptions: {
                position: 'topright',
                minZoomMessage: 'Current zoom level: CURRENTZOOM - All data at level: MINZOOMLEVEL'
            },
            minZoom:15,
            
          
            onSuccess: function (data) {
                
               
                for(i=0;i<data.elements.length;i++){
                e=data.elements[i];
                var pos =new L.LatLng(e.lat,e.lon);
                tags=e.tags
                typeTag=typeof(tags)
                console.log(typeTag)

                
                if(tags.name!=null){
                    
                    const container=document.getElementsByClassName("panel")
                    const item = document.createElement("button")
                    const div=document.createElement('div')
                    div.appendChild(item)
                    item.className='name'

                    

                    
                    
                    item.innerText = tags.name
                    // document.getElementById('items').appendChild(div)

                    


                   
                    let classnames=document.getElementsByClassName('name')

                    // function Iconpopup(){
                    //     point.bindPopup(formatMarkerInfo(e));

                    // }

                    // for(let names of classnames){
                    //     names.addEventListener('click',Iconpopup)
                    // }

                    
                }
                  


                
                


                function getTags(){
                for (var key in tags) {
                    amenitykey=key
                    amenityValue=tags[key]
                    amenityinfo=`${amenitykey}: ${amenityValue}`
                    info=[]
                    info.push(amenityinfo)
                    

                  }
                }

                // getTags()
                
                // console.log(info)
                
                var point=L.marker(pos,{
                    icon:b,
                    title: tags.name
                })

               

                // item.onclick = function() {
                //     console.log('clicked');
                //     console.log(tags.name)
                //     map.flyTo([marker.lat,marker.lng],20);
                //     point.bindPopup(formatMarkerInfo(e));
                    
                //   }

                // Object.keys(tags).forEach(key => {
                //     label=``;
                //     label+=`${key}: ${tags[key]}`;
                //     console.log(tags)
                //     point.bindPopup(label);
                 
                //     point.on('click', $('#panel').html(`${label}`))
                //   });

                var addingTopanel=function(node){
                    var formattedString = ""
                    
                for (tagName in node.tags) {
                    if (node.tags.hasOwnProperty(tagName)) {
                        formattedString = formattedString + "<b>" + node.tags.name + "<br>";
                        formattedString+=formattedString
                        console.log(formattedString)
                    }
                }

                // document.getElementById("panel").innerHTML = formattedString;

                }

                point.bindPopup(formatMarkerInfo(e));
                point.on('click', $('#panel').html(formatMarkerInfo(e)))
               


                // point.bindPopup("Name: "+tags.name+"</br>"+"Amenity: "+tags.amenity)//add markers to cluster
                c.push(point);

                var marker=c[0].getLatLng()
                console.log(c)
                


                
                }
                
                
                


                
                    var layer=document.getElementById(a)
                    if(layer.checked){
                        grupo.clearLayers(c)
                        grupo.addLayers(c);
                        
                        
                       
                    // c.addTo(grupo)
                    
                        
                    }else{
                        
                        grupo.removeLayers(c)
                        
                    }
                    
                
            }
        });
       
       
        

        function removeChildElements() {
            var childElements = document.getElementById("items");
            childElements.innerHTML = "";
           }
        map.addLayer(grupo);
        // removeChildElements()
        map.addLayer(amenity)
    }



  

    var AddRoad=function(a,b){
        var Roads=L.OverPassLayer({
            debug:true,
            endPoint: 'https://lz4.overpass-api.de/api/',
            query: `way({{bbox}})[${a}];out body;>;out skel qt;`,
            minZoomIndicatorOptions: {
                position: 'topright',
                minZoomMessage: 'Current zoom level: CURRENTZOOM - All data at level: MINZOOMLEVEL'
            },
            minZoom:15,
            callback:function(data){
                return L.geoJson(data,{
                    pointToLayer:function(data){
                        return L.geoJson(data,{
                            style:function(feature){
                                return{
                                color:b,
                                weight:2,
                                opacity:0.7
                                }


                            }
                        })
                    }
                })
            }

        })

        var layer=document.getElementById(a)
                    if(layer.checked){
                        map.addLayer(Roads)
                        
                    }else{
                        map.removeLayer(Roads)
                        
                    }

    }




  // callback:function(data){
    //     return L.geoJson(data,{
    //         pointToLayer:function(feature,latlng){
    //             return L.circleMarker(latlng,{
    //                 radius:4,
    //                 fillColor:"#ff7800",
    //                 color:"#000",
    //                 weight:1,
    //                 opacity:1,
    //                 fillOpacity:0.8
    //             })
    //         }
    //     }.addTo(grupo))
    // }



//     var opl = new L.OverPassLayer({

//         'query': 'node["amenity"="restaurant"](49.011903881920404,8.405687766634742,49.061903881920404,8.585687766634742)out body;>;out skel qt;',
//         callback:function(data){
//         marker= L.geoJson(data,{
//             pointToLayer:function(feature,latlng){
//                 return L.circleMarker(latlng,{
//                     radius:4,
//                     fillColor:"#ff7800",
//                     color:"#000",
//                     weight:1,
//                     opacity:1,
//                     fillOpacity:0.8
//                 })
//             }
//         })
//     },

//         // "markerIcon":pubIcon
    
//     });


// // const mcgLayerSupportGroup = L.markerClusterGroup.layerSupport();
    
// // mcgLayerSupportGroup.addTo(map);
// // mcgLayerSupportGroup.checkIn(opl); // <= this is where the magic happens!

// // grupo.addLayer(opl);
// // map.addLayer(grupo)

// // opl.addTo(map);

        

        
       
        

   
    















//add control layers for the base maps
L.control.layers({
    'Stamen':Stamen_Toner,
    'OSM':osm,
    'openTopoMap':openTopoMap,
}).addTo(map)

//add print icon
L.control.browserPrint({position:'topright',Title:'Print...'}).addTo(map);