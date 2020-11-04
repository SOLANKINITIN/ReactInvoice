import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing() * 2,
	},

	button: {
		marginTop: theme.spacing() * 2,
		marginBottom: theme.spacing() * 2,
		backgroundColor: theme.palette.success.main,
		color: theme.palette.common.white,
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			color: theme.palette.common.black,
		},
	},
	search: {
		height: 125,
		width: '100%',
	},
	action: {
		marginTop: theme.spacing() * 2,
		margin: theme.spacing() * 2,
		marginBottom: theme.spacing() * 2,
	},
	title: {
		textAlign: 'center',
		marginTop: theme.spacing() * 1,
	},
	textField: {
		border: 'none',
		borderRadius: theme.spacing(1),
		backgroundColor: theme.palette.common.white,
	},
	image: {
		maxWidth: '100%',
		height: 'auto',
	},
	SearchHolder: {
		float: 'right',
	},
	BillAddButton: {
		float: 'left',
	},


}));
export default useStyles;
