import { FC } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';

export type BasicListItemType = {
  id: string;
  text: string;
}

export const BasicListItem: FC<BasicListItemType> = ({ text }) => (
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
              <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
);
