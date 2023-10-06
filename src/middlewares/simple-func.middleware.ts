import { Request, Response, NextFunction } from 'express'

export function simpleFunc(req: Request, res: any, next: NextFunction) {
    // In here do some stuff :p
    console.log(req.body ?? '');  

    next();

    // Store the original res.json method
    const originalJson = res.json;

    // Override the res.json method
    res.json = function (data: any) {

      if (data.data.Foulen) {
        // Modify the response data here
        data.data.Foulen.active = true;
        console.log(data);  
      }

        // Call the original res.json method with the modified data
        originalJson.call(res, data);
    };

} 