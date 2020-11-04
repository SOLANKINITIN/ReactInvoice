import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing() * 5,
	},
	progress: {
		width: '100%',
		height: '100%',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
}));
export default useStyles;
