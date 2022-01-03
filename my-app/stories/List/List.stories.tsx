import React from 'react';
import { BasicList, BasicListType } from '../../components/List';
import { Story, Meta } from '@storybook/react';

export default {
    title: 'List/List',
    component: BasicList,
} as Meta;

const Template: Story<BasicListType> = (args) => <BasicList {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [
        {
            id: '1',
            text: 'sample1',
        },
        {
            id: '2',
            text: 'sample2',
        },
        {
            id: '3',
            text: 'sample3',
        },
        {
            id: '4',
            text: 'sample4',
        },
        {
            id: '5',
            text: 'sample5',
        },
    ]
};
