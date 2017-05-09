import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const ShoppingCartSpec = {
    drop() {
        return {name: 'ShoppingCart'};
    }
};

let collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
};

class ShoppingCart extends Component {
    render() {
        const { canDrop, isOver, connectDropTarget } = this.props;
        const isActive = canDrop && isOver;
        let backgroundColor = '#fff';
        if (isActive) {
            backgroundColor = '#f7f7bd';
        } else if (canDrop) {
            backgroundColor = '#f7f7f7';
        }
        const style = {
            backgroundColor: backgroundColor
        }
        return connectDropTarget(
            <div className='shopping-cart' style={style}>
                {isActive ?
                    'Hmmmmm, snack!' :
                    'Drag here to order!'
                }
            </div>
        );
    }
}

export default DropTarget("snack", ShoppingCartSpec, collect)(ShoppingCart);