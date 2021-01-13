import React from 'react'
import {Link} from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import '../styles/pages/OrphanagesMap.css'
import {MapContainer,TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaflet from 'leaflet';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg ,
    iconSize: [58,68],
    iconAnchor: [29,68], // Para posicionar a ponta do icone no local certo
    popupAnchor: [170,2]
})

function OrphanagesMap () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt=""/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>Guaxupé</strong>
                    <strong>Minas Gerais</strong>
                </footer>
            </aside>
            
            <MapContainer 
                center={[-21.318416,-46.718843]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
                >
                    {/* <TileLayer url="https: //a.tile.opensstreetmap.org/{z}/{x}/{y}.png" /> */}
                    <TileLayer 
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                    />

                    <Marker 
                    icon={mapIcon}
                        position={[-21.318416,-46.718843]}
                    >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            Lar das meninas
                            <Link to="/orphanages/create">
                                <FiArrowRight size={20} color="#fff"/>
                            </Link>
                        </Popup>
                    </Marker>
            </MapContainer>

            <Link to="/orphanages/1" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        
        </div>
    );
}

export default OrphanagesMap