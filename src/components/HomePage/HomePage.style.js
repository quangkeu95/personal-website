import backDropImg from "./rsz_quang_sapa.jpg";

export const styles = theme => ({
	backDropPanel: {
		// height: "calc(100vh - 60px)",
		height: "100vh",
		// background: `linear-gradient(90deg, <r></r>gba(212,211,211,1) 0%, rgba(255,255,255,1) 50%), url(${backDropImg})`,
		backgroundImage: `url(${backDropImg})`,
		backgroundPosition: "top",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed"
	},
	backDrop: {
		height: "100%",
		width: "100%",
		position: "absolute",
		left: "0",
		top: "0"
	},
	title: {
		// fontFamily: '"Sanchez", serif',
		color: "#fff",
		textAlign: "center",
		fontWeight: "700",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.6em"
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "2em"
		},
		[theme.breakpoints.up("xl")]: {
			fontSize: "2.5em"
		},
		position: "relative",
		animation: "float-left 2s ease-out 0s 1 normal"
	},
	"@keyframes float-top": {
		from: {
			top: "50px",
			opacity: 0
		},
		to: {
			top: "0px",
			opacity: 1
		}
	},
	"@keyframes float-left": {
		from: {
			left: "-50px",
			opacity: 0
		},
		to: {
			left: "0px",
			opacity: 1
		}
	},
	"@keyframes float-right": {
		from: {
			right: "-50px",
			opacity: 0
		},
		to: {
			right: "0px",
			opacity: 1
		}
	},
	subTitle: {
		// fontFamily: '"Sanchez", serif',
		color: "#fff",
		textAlign: "center",
		fontWeight: "400",
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.9em"
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "1em"
		},
		[theme.breakpoints.up("xl")]: {
			fontSize: "1.2em"
		},
		position: "relative",
		animation: "float-right 2s ease-out 0s 1 normal"
	},
	hireMeBtn: {
		background: "#8A2387" /* fallback for old browsers */,
		background:
			"-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)" /* Chrome 10-25, Safari 5.1-6 */,
		background:
			"linear-gradient(to right, #F27121, #E94057, #8A2387)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
		color: "#FFF",
		letterSpacing: "0.1em",
		[theme.breakpoints.down("sm")]: {
			padding: "5px 30px",
			borderRadius: "10px",
			fontSize: "0.8em"
		},
		[theme.breakpoints.up("sm")]: {
			padding: "10px 50px",
			borderRadius: "19px",
			fontSize: "1em"
		},
		[theme.breakpoints.up("xl")]: {
			fontSize: "1.2em"
		},
		position: "relative",
		animation: "float-top 2s ease-out 0s 1 normal"
	}
});
