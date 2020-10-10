import * as React from 'react';
import  reset from './images/reset.png'
import  image from './images/image.png'
// ES6
import sign from './images/signature.png'
import hetong from './images/hetong.jpg'
import './App.css'
import Draggable, {DraggableCore} from 'react-draggable';
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMask:false,
            activeDrags: 0,
        };
    }
    componentDidMount() {
    }
    onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
    };

    onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
    };
    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        return (
            <div >
                <div style={{width:'100%',position:'relative'}}>
                    <img src={hetong} style={{width:'100vw'}} alt=""/>
                    <Draggable  bounds="parent"  {...dragHandlers}>
                        <div  className={'box1 drag'}>
                            <img style={{width:'100px',height:'50px'}} src={sign} alt=""/>
                        </div>
                    </Draggable>
                </div>


            </div>

        );
    }
}

export default Gallery;