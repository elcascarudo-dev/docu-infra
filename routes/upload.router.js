/**
 * Rutas para subir archivos
 * 
 * /api/upload
 */

/*****************************************************************************
 * 
 * Importación de paquetes
 * 
 */
 const { Router } = require( 'express' );
 const expressFileUpload = require( 'express-fileupload' );

/*****************************************************************************
 * 
 * Middleware
 * 
 */
 const { validarJWT } = require( '../middleware/validar-jwt.middleware' );
 
/*****************************************************************************
 * 
 * Importación de controladores
 * 
 */
 const  { 
          uploadPhoto, 
          viewPhoto 
        } = require( '../controllers/upload.controller' );
 


 const router = Router();
 // Paquete para subir archivos por medio de ExpressJS
 router.use( expressFileUpload() );


/*****************************************************************************
 * 
 * Rutas
 * 
 */
 router.put( '/foto/:type/:id', validarJWT, uploadPhoto );


 router.get( '/foto/:type/:image', viewPhoto );

/*****************************************************************************
 * 
 * Exportar rutas
 * 
 */
 module.exports = router;