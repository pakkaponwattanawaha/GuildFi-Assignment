# GuildFi assignment Frontend web3

 - Deployment URL: https://guild-fi-assignment.vercel.app/
                  
### Table of content

   - [Application](#application)
     - [Stack Used](#stack-used)
     - [Library](#library)
   - [3D](#3d)
     - [Terrain Plane](#terrain-plane)
     - [City Region](#city-region)
     - [Model Object](#model-object)
     - [Camera](#camera)
   - [Improvement](#improvement)
 
 ## Application
 
 ### Stack Used
 ### Library
 
 ## Features
 ### Terrain Plane
 use `<meshStandardMaterial/>` component
 
 ### City Region
 use `<meshStandardMaterial/>` component to render region highlight
 and `<sprite/>` component to render camera facing badge and city name
 ### Model Object
  render 3d object model on `<meshStandardMaterial/>` and place it on the Terrain Plane
  
 ### Camera
 Camera is the perspective view point of the application. We can look at it like an object orbiting the assigned focus coordination
 Camera has its own positional coordination which is referenced to it's original coordinate .
 
 We will need to assign variable for the coordinate
 
 let  ` Xc, Yc, Zc is the x,y,z coordinate of the camera relative to its original coordinate`
 
 let  ` Xp, Yp, Zp is the x,y,z coordinate of the camera relative to the Terrain Plane`
 
 let ` θ is the polar angle of camera to the Z-Axis of the Terrain Plane `
 
 and for this specific setup notice that `Xc = Xp`
 
 Then we would have something like this
 ![image](https://user-images.githubusercontent.com/54467698/183620787-cfd2d6af-8742-4acc-8c0d-cd252644445a.png)

             
  - Camera Movement
    - scrolling
     scrolling action will trigger the camera movement in Yc and Zc Axis 
     and when combining with the zooming action ( the orbital target Z-Axis)
    - panning
    normal panning of `<orbitalCamera>` moveing mouse in x and y direction will move the component in Xc and Yc which is not always paraellel with the Terrain Plane. So, we need the camera restriction logic.
  - Camera Restriction
  for camera restriction we will defined the restriction boundary cube to limit camera movement
  When the camera collide with the boundary the position Xp, Yp, Zp will be set to the boundary
  
    ![image](https://user-images.githubusercontent.com/54467698/183627364-bbbdd0a3-3d1c-4a0b-812f-d22281aee340.png)
  Ex. for Y axis we will be setting Yp to the restriction boundary and `Yc = Yc * Cosθ`
  
  - Camera Breakpoint
   when the viewing angle is more than 45 degree the Object will be shown on the plane instead of CityRegion
  
 ### Misc. features 
  - sound - Interactive UI sound player
  - Wallet connection - require wallet connection to use the applicaion
  - Responsive Design - work for all screen size
  - Loading Screen - percentage of resource loaded
  - Welcome overlay - Welcome screen for entering the site
 
 
### Imporvement
## Ideal Camera movement

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
