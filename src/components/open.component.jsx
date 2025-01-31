import { SvgXml } from 'react-native-svg'

const openSvg = `<?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.952 511.952" style="enable-background:new 0 0 511.952 511.952;" xml:space="preserve">
<path style="fill:#FF7058;" d="M510.909,373.411l-52.267-212.267c-4.267-17.067-22.4-27.733-39.467-23.467L24.509,235.811
	c-17.067,4.267-27.733,21.333-23.467,38.4l52.267,213.333c4.267,17.067,22.4,27.733,39.467,23.467l394.667-98.133
	C504.509,408.611,515.176,391.545,510.909,373.411z"/>
</svg>`

export const OpenIcon = ({ width = 20, height = 20 }) => {
  return <SvgXml xml={openSvg} width={width} height={height} />
}
