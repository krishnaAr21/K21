import React from 'react';
import { Midi, Heading, Full, Inner, Image } from '../../theming/styles';
import Split from '../../components/split';
import Awk1 from '../../images/Awkward1.jpg';
const Content = () => {
    return (
        <>
            <Midi>
                <Heading>
                    Hi, I'm <alt>Julia.</alt> Front End Developer, and Intern at
                    IBM.
                </Heading>
            </Midi>
            <Full>
                <Image style={{ backgroundImage: `url(${Awk1})` }} />
            </Full>
            <Midi>
                <Split />
            </Midi>
        </>
    );
};

export default Content;
