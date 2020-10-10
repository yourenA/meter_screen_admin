import * as React from 'react';

class ToggleVisible extends React.Component {
    state = {
        visible: false
    };
    toggle = () => {
        this.setState({visible: !this.state.visible});
    }
    render() {
        return (
            <>{this.props.children({visible, toggle})}</>
        );
    }
}
const EditUser = () => (
    <ToggleVisible>
        {({visible, toggle}) => (<>
            <Modal visible={visible}/>
            <Button onClick={toggle}>打开/关闭modal</Button>
        </>)}
    </ToggleVisible>
)
export default EditUser;