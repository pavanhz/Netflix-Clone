import React from 'react'
import Banner from '../Banner'
import './HomeScreen.css'
import Nav from '../Nav'
import requests from '../Request'
import Row from '../Row'

const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            {/* Nav */}
            <Nav />

            <Banner />
            {/* Banner */}


            <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals}
                isLargeRow
            />
            {/* <Row title='Trending Now' fetchURL={requests.fetchTopRated} /> */}
            <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
            <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
            <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />
            {/* Row */}
        </div>
    )
}

export default HomeScreen