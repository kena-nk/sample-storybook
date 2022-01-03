import { FC } from 'react';
import List from '@mui/material/List';
import type { BasicListItemType } from '../ListItem';
import { BasicListItem } from '../ListItem';

export type BasicListType = {
  items: BasicListItemType[];
}

export const BasicList: FC<BasicListType> = ({ items = [] }) => (
  <List>
    {items.map((item: BasicListItemType) => <BasicListItem {...item} key={item.id}/>)}
  </List>
);
