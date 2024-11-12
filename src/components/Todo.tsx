import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({ value, onToggle, onDelete }: any) {
  const textStyle = {
    textDecoration: value.done ? 'line-through' : 'none'
  }

  return <ListItem secondaryAction={
    <IconButton edge="end" aria-label="comments" color="error" onClick={onDelete}>
      <DeleteIcon />
    </IconButton>
  }>
    <ListItemButton role={undefined} onClick={onToggle} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={!!value.done}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText primaryTypographyProps={{ style: textStyle }} primary={value.title} />
    </ListItemButton>
  </ListItem>
}

export { Todo };