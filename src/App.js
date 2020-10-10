import * as React from 'react';
import  reset from './images/reset.png'
import  image from './images/image.png'
import './App.css'
import '../node_modules/react-resizable/css/styles.css';
// ES6
import html2canvas from 'html2canvas'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMask:false
        };
    }
    componentDidMount() {
      this.renderDefault()
    }
    renderDefault=()=>{
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i); //获取本地存储的Key
            let value=localStorage.getItem(key)
            console.log('key',Boolean(Number(value)))

            this.setState({
                [key]:Boolean(Number(value))
            })
        }
    }
    resetImage=()=>{
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i); //获取本地存储的Key
            localStorage.setItem(key,0)
            this.setState({
                [key]:false
            })
        }

    }
    exportImg=()=>{
        const that=this
        html2canvas(document.querySelector(".box")).then(canvas => {
            let mask=document.querySelector('.canvas-box')
            console.log('mask',mask)
            that.setState({
                showMask:true
            },function () {
                canvas.id='img'
                mask.appendChild(canvas)
            })


        });
    }
    changTopMenu=(item)=>{
        this.setState({
            [item]:!this.state[item]
        },function () {
            localStorage.setItem(item,this.state[item]?1:0)
        })
    }
    render() {
        const that=this
        const renderTopMenu=['top_menu1','top_menu2','top_menu3','top_menu4','top_menu5','top_menu6','top_menu7',
            'top_menu8','top_menu9','top_menu10','top_menu11','top_menu12'].map(function (item,index) {
                return <div key={index} onClick={()=>{that.changTopMenu(item)}}
                            className={`top-menu-item ${'top-menu-item'+(index+1)} ${that.state[item]?'active':''}`}></div>

        })
        const renderRightMenu=['right_menu1','right_menu2','right_menu3','right_menu4','right_menu5','right_menu6','right_menu7',
            'right_menu8','right_menu9','right_menu10'].map(function (item,index) {
            return <div key={index} onClick={()=>{that.changTopMenu(item)}}
                        className={`right-menu-item ${'right-menu-item'+(index+1)} ${that.state[item]?'active':''}`}></div>

        })
        const renderNumber1=['number11','number12','number13','number14','number15','number16','number17',
            'number18','number19'].map(function (item,index) {
            return <div key={index} style={{left:103*index+61+'px'}} onClick={()=>{that.changTopMenu(item)}}
                        className={`number1-item ${'number1-item'+(index+1)} ${that.state[item]?'active':''}`}></div>
        })
        const renderNumber2=['number21','number22','number23','number24','number25','number26','number27',
            'number28','number29'].map(function (item,index) {
            return <div key={index} style={{left:103*index+50+'px'}} onClick={()=>{that.changTopMenu(item)}}
                        className={`number2-item ${'number2-item'+(index+1)} ${that.state[item]?'active':''}`}></div>
        })
        const renderNumber3=['number31','number32','number33','number34','number35','number36','number37',
            'number38','number39'].map(function (item,index) {
            return <div key={index} style={{left:103*index+104+'px'}} onClick={()=>{that.changTopMenu(item)}}
                        className={`number3-item ${'number3-item'+(index+1)} ${that.state[item]?'active':''}`}></div>
        })
        const renderNumber4=['number41','number42','number43','number44','number45','number46','number47',
            'number48','number49'].map(function (item,index) {
            return <div key={index} style={{left:103*index+61+'px'}} onClick={()=>{that.changTopMenu(item)}}
                        className={`number4-item ${'number4-item'+(index+1)} ${that.state[item]?'active':''}`}></div>
        })
        const renderNumber5=['number51','number52','number53','number54','number55','number56','number57',
            'number58','number59'].map(function (item,index) {
            return <div key={index} style={{left:103*index+43+'px'}} onClick={()=>{that.changTopMenu(item)}}
                        className={`number5-item ${'number5-item'+(index+1)} ${that.state[item]?'active':''}`}></div>
        })
        const renderNumber6=['number61','number62','number63','number64','number65','number66','number67',
            'number68','number69'].map(function (item,index) {
            return <div key={index} style={{left:103*index+97+'px'}} onClick={()=>{that.changTopMenu(item)}}
                        className={`number6-item ${'number6-item'+(index+1)} ${that.state[item]?'active':''}`}></div>
        })
        const renderNumber7=['number71','number72','number73','number74','number75','number76','number77',
            'number78','number79'].map(function (item,index) {
            return <div key={index} style={{left:103*index+47+'px'}} onClick={()=>{that.changTopMenu(item)}}
                        className={`number7-item ${'number1-item'+(index+1)} ${that.state[item]?'active':''}`}></div>
        })
        const renderDot=['number81','number82','number83','number84','number85','number86'].map(function (item,index) {
            return <div key={index} style={{left:103*index+226+'px'}} onClick={()=>{that.changTopMenu(item)}}
                        className={`number8-item ${'number8-item'+(index+1)} ${that.state[item]?'active':''}`}></div>
        })
        return (
            <div className={'container'}>
                <div className={'title'}>
                    <h1>自定义水表显示屏</h1>
                    <p>请将鼠标移至页面中间,点击图案即可画出</p>
                </div>

                <div className='box'>
                    <div className="top-menu">
                        {renderTopMenu}

                    </div>
                    <div className="right-menu">
                        {renderRightMenu}

                    </div>
                    <div className="number-menu">
                        {renderNumber1}
                        {renderNumber2}
                        {renderNumber3}
                        {renderNumber4}
                        {renderNumber5}
                        {renderNumber6}
                        {renderNumber7}
                        {renderDot}

                    </div>
                </div>
                {

                    <div style={{display: this.state.showMask?'block':'none'}} className="mask" id={'mask'}>
                        <div className="mask-bg" onClick={()=>{
                            document.querySelector('.canvas-box').removeChild(document.querySelector('#img'));
                            this.setState({
                                showMask:false
                            })
                        }}></div>
                        <div className={'canvas-box'}>
                            <p>右击图片保存图片到本地</p>
                        </div>
                    </div>
                }
                <div className='bottom-button'>
                    <div className="reset"  title={'清空画布'} onClick={this.resetImage}>
                        <img src={reset} alt=""/>
                    </div>
                    <div className="export"  title={'生成图片'}  onClick={this.exportImg}>
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Gallery;