import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
});

export const button = style({
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  margin: '5px'
});

export const variant = styleVariants({
  primary: [button, { background: '#2196F3', color: 'white',borderRadius:'10px', ':hover':{backgroundColor:'#0D47A1'},':focus':{backgroundColor:'#1565C0',outline: '8px solid #E3F2FD'},':active':{backgroundColor:'#1565C0', color: 'lightgray',outline: 'none'},':disabled': { backgroundColor: '#82B1FF', color: '#E0E0E0', cursor: 'not-allowed'}}],
  secondary: [button, { background: 'white', color: 'black', border: '1px solid black',borderRadius:'10px',':hover':{backgroundColor:'lightgray'},':focus':{backgroundColor:'darkgray'},':active':{backgroundColor:'darkgray', color: 'lightgray'},':disabled': { backgroundColor: 'white', color:'#E0E0E0', border: '1px solid darkgray', cursor: 'not-allowed' }}],
  tertiary: [button, { background: 'white', color:'darkviolet',borderRadius:'10px',':hover':{color:'purple'},':focus':{backgroundColor:'#d7BDFF'},':active':{backgroundColor:'white', color: 'black'},':disabled': { backgroundColor: 'white', color: '#E0E0E0', cursor: 'not-allowed' }}],
});
