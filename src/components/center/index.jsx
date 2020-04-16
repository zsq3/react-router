import React, {Component} from 'react';
import BorderBox1 from '@jiaminghi/data-view-react/es/borderBox1'
import { FlylineChart } from '@jiaminghi/data-view-react'

import './index.css'

const config = {
    centerPoint: [0.48, 0.35],
    points: [
        [0.52, 0.23],
        [0.43, 0.29],
        [0.59, 0.35],
        [0.53, 0.47],
        [0.45, 0.54],
        [0.36, 0.38],
        [0.62, 0.55],
        [0.56, 0.56],
        [0.37, 0.66],
        [0.55, 0.81],
        [0.55, 0.67],
        [0.37, 0.29],
        [0.20, 0.36],
        [0.76, 0.41],
        [0.59, 0.18],
        [0.68, 0.17],
        [0.59, 0.10]
    ],
    bgImgUrl: '/img/flylineChart/map.jpg',
    centerPointImg: {
        url: '/img/flylineChart/mapCenterPoint.png'
    },
    pointsImg: {
        url: '/img/flylineChart/mapPoint.png'
    }
}

class Home extends Component {
    render() {
        return (
            <div className={'manage'}>
                <BorderBox1 color={['red', 'green']} >
                    <FlylineChart config={config} style={{width: '100%', height: '100%'}} />
                </BorderBox1>
            </div>
        );
    }
}

export default Home;