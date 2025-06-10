import { Scanner } from '@yudiel/react-qr-scanner';
const scanHandler = (result) => {
    console.log(result)
}
const stylesScanner = {
    container:{
        width:350,
        height:350,
        margin:'auto',
        borderRadius:10,
    }
}
export const QRcodeScanner = () => {
    return (
   
    <Scanner 
        allowMultiple
        styles={stylesScanner}
        onScan={scanHandler} />
  )
}