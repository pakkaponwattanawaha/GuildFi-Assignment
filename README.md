# GuildFi assignment Frontend web3

 - Deployment URL: https://guild-fi-assignment.vercel.app/
                  
### Table of content

   - [Application](#application)
     - [Stack Used](#stack-used)
     - [Library](#library)
     - [How to run](#how-to-run)
   - [3D](#3d)
     - [Terrain Plane](#terrain-plane)
     - [City Region](#city-region)
     - [Model Object](#model-object)
     - [Camera](#camera)
   - [Improvement](#improvement)
 
 ## Application
 
 ### Stack Used
 ### Library
 ## How to run


    ```
    npm install
    and
    npm run dev
    # or
    yarn install
    and
    yarn dev
    ```
 ## Features
 ### Terrain Plane
 use `<meshStandardMaterial/>` component
 
 ### City Region
 use `<meshStandardMaterial/>` component to render region highlight
 and `<sprite/>` component to render camera facing badge and city name
 ### Model Object
  render 3d object model on `<meshStandardMaterial/>` and place it on the Terrain Plane
  
 ### Camera
 Camera is the perspective view point of the application.It is you point of view when using the application. We can look at it like an object orbiting a point (this point is refer as focus point)
 Camera has its own positional coordination which is referenced to it's original coordinate .
 
 We will need to declare variable for each coordinate value.
 
 let  ` Xc, Yc, Zc = the x,y,z coordinate of the camera relative to its original coordinate`
 
 let  ` Xp, Yp, Zp = the x,y,z coordinate of the camera relative to the Terrain Plane`
 
 let ` θ is the polar angle of camera to the Z-Axis of the Terrain Plane `
 
 and for this specific setup notice that `Xc = Xp` .
 
 Then we would have something like this.
 
 <img src="https://user-images.githubusercontent.com/54467698/183620787-cfd2d6af-8742-4acc-8c0d-cd252644445a.png" alt="drawing" width="500"/>


  #### Camera Restriction
  For camera position restriction we will defined the restriction boundary cube to limit camera movement.
  When the camera collide with the boundary the position Xp, Yp, Zp will be set to the boundary value.
  
  for camera angle restriction we will be setting the focus target position (coorditation that our camera )
  
  let ` Xf, Yf, Zf = position of focus point relative to the Terrain Plane `
  
   <img src="https://user-images.githubusercontent.com/54467698/183687814-59402fbe-0796-4736-97d6-3a7d861cabb6.png" alt="drawing" width="500"/>
    
  Ex. for Y axis we will be setting Y to the restriction boundary and focus point to `Yf += Yf * Cosθ`
      which in result will create an invinsible boundary effect
             
  #### Camera Movement
    - panning
    
    normal panning of `<orbitalCamera>` work when moving mouse in x and y direction which result in moving the camera in Xc and Yc Axis
    the problem with this movement is Xc and Yc is not always paraellel to the Terrain plane (which is the behavior we want)
    We can use camera restriction to solve this problem for now.
   
   - dollying
   
    Dollying action is a combination of Zooming + Focus Point Movement and is trigger when mouse scroll is register.
    Noted that `<orbitalCamera>` will always pointing toward the focus point.
    
  <img src="https://user-images.githubusercontent.com/54467698/183704100-d51c3a8d-f1be-420a-ade6-ef844c431b51.png" alt="drawing" width="700"/>

     
  As described in the figure the focus point will move in the focus point trajectory when mouse scroll is register.
  
  The focus point will continue to move in its trajectory until the camera is collide with the bounary 
  and will only be moving in Yp-Axis untill reached `θ = PI / 3.75 = 38 degree` .
  
  I also added the cosθ and sinθ bias to make the action smoother.
  
  #### Camera Breakpoint
   when the polar angle θ is more than 45 degree the ObjectModel will be shown on the plane instead of CityRegion
  
 ### Misc. features 
  - sound - Interactive UI sound player
  - Wallet connection - require wallet connection to use the application
  - Responsive Design - work for all screen size
  - Loading Screen - percentage of resource loaded
  - Welcome Overlay - Welcome screen for entering the site
 
 
### Improvement
#### Misc. features
 - a lot could be added here ex.auto zoom ,mute, city text, cloud ,ocean , more detail in overlay (z2 details)
#### Ideal Camera movement
  As mentioned earlier the panning action of the camera still not perfect. To achieve that we will need to customized how dragging out mouse in x and y axis behave.
  
 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


