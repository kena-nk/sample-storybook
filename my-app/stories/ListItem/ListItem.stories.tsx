import React from 'react';
import { BasicListItem, BasicListItemType } from '../../components/ListItem';
import { Story, Meta } from '@storybook/react';

export default {
    title: 'ListItem/ListItem',
    component: BasicListItem,
} as Meta;

const Template: Story<BasicListItemType> = (args) => <BasicListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: '1',
    text: 'default',
};
