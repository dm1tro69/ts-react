import React, {FC, useState} from 'react';

type PropType = {
    title?: string;
    children?: never
}

const Header: FC<PropType> = ({title}: PropType) => {

    const [counter, setCounter] = useState(0)

    const content = typeof title === 'string' ? title.toLowerCase(): null

    const increase = ():void => {
         setCounter((prevState)=> prevState+1)
    }
    const decrease = ():void => {
        setCounter((prevState)=> prevState-1)
    }

    return (
        <>
            <h1>{content}</h1>
            <h3>{counter}</h3>
        </>
    );
};

export default Header;

Header.defaultProps = {
    title: 'Hello'
}
