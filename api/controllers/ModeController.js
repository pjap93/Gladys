/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Pierre-Gilles Leymarie
  */
  
/**
 * @apiDefine ModeSuccess
 * @apiSuccess {String} code Unique code of the Mode
 * @apiSuccess {String} name name
 * @apiSuccess {String} description Description
 */

/**
 * @apiDefine ModeParam
 * @apiParam {String} code Unique code of the Mode
 * @apiParam {String} name name
 * @apiParam {String} description Description
 */

module.exports = {
    
    /**
     * @api {get} /mode get all modes
     * @apiName getModes
     * @apiGroup Mode
     * @apiPermission authenticated
     * 
     * @apiUse ModeSuccess
     */
    index: function(req, res, next){
        gladys.mode.get()
          .then(function(modes){
              return res.json(modes);
          })
          .catch(next);
    },
    
    /**
     * @api {post} /mode create mode
     * @apiName createMode
     * @apiGroup Mode
     * @apiPermission authenticated
     *
     * @apiUse ModeParam
     * 
     * @apiUse ModeSuccess
     */
    create: function(req, res, next){
        gladys.mode.create(req.body)
          .then(function(mode){
              return res.status(201).json(mode);
          })
          .catch(next);
    },
    
    /**
     * @api {delete} /mode/:id delete mode
     * @apiName deleteMode
     * @apiGroup Mode
     * @apiPermission authenticated
     */
    delete: function(req, res, next){
        gladys.mode.delete({id: req.params.id})
          .then(function(){
              return res.json({success: true});
          })
          .catch(next);
    },
    
    /**
     * @api {post} /house/:id/mode change mode
     * @apiName changeMode
     * @apiGroup Mode
     * @apiPermission authenticated
     * 
     * @apiParam {String} mode Mode code 
     * 
     * @apiUse EventSuccess 
     */
    change: function(req, res, next){
        req.body.house = req.params.id;
        gladys.mode.change(req.body)
          .then(function(event){
              return res.json(event);
          })
          .catch(next);
    },

     /**
     * @api {patch} /mode/:id update a mode
     * @apiName updateMode
     * @apiGroup Mode
     * @apiPermission authenticated
     *
     * @apiUse Mode
     * 
     * @apiUse ModeSuccess
     */
    update: function(req, res, next){
        
        req.body.id = req.params.id;
        gladys.mode.update(req.body)
          .then(function(mode){
              return res.json(mode);
          })
          .catch(next);
    }
	
};

