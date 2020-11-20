import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';


class Drums extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.props.keyPressHandler);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.props.keyPressHandler);
      }

    render() {
        let pads = this.props.padsData.map((padObj, i, padsArr) => {
            return(
                <Grid xs={3} justify="center" container item>
                    <button
                        className="drum-pad"
                        id={padsArr[i].description}
                        onClick={this.props.clickHandler}
                        onKeyPress={this.props.keyPressHandler}
                        style={{width: "100%"}}
                    >
                        <audio 
                            className="clip"
                            id={padsArr[i].key.toUpperCase()}
                            src={padsArr[i].soundSource}
                        />
                        {padsArr[i].key.toUpperCase()}
                    </button>
                    
                </Grid>
            )
        })

        return <Card className="pads" style={{padding: "20px", margin: "20px"}}>{pads}</Card>
    }
}

export default Drums