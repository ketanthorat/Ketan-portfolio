# Project Images Guide

## Quick Setup

### Option 1: Add Your Own Images
Place your project images in this folder with these exact names:

```
public/images/projects/
├── lidar-amr.jpg
├── octo-cli.jpg
├── apple-drone.jpg
├── prosthetic-hand.jpg
├── robotic-arm.jpg
├── rocker-bogie.jpg
├── smart-irrigation.jpg
├── sumo-robot.jpg
├── line-follower.jpg
├── maze-solver.jpg
└── obstacle-avoiding.jpg
```

### Option 2: Use Placeholder Images
If you don't have images yet, the design includes beautiful gradient placeholders with the first letter of each project.

### Image Specifications

**Recommended Dimensions**: 800x600px (4:3 aspect ratio)
**Minimum Dimensions**: 400x300px
**Maximum File Size**: 500KB per image
**Formats**: JPG (preferred), PNG, WebP

### Image Optimization Tips

1. **Compress images** before adding:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: 100-300KB per image

2. **Crop to focus** on the main subject:
   - Show the robot/project clearly
   - Remove unnecessary background

3. **Consistent style**:
   - Similar lighting across images
   - Professional quality preferred
   - Action shots work great

### Example Image Sources

If you need to create images:
- Take photos of your actual projects
- Use screenshots from simulations (Gazebo, RViz)
- Create renders from CAD models (SolidWorks, Fusion 360)
- Use diagrams or schematics for conceptual projects

### Testing

After adding images:
1. Run `npm run dev`
2. Navigate to `/projects`
3. Check that images load correctly
4. Verify responsive behavior on mobile

### Fallback Behavior

If an image is missing, the design shows:
- Gradient background (brand colors)
- First letter of project name
- Shimmer animation effect

This ensures the page looks great even without images!

---

**Need Help?** The gradient placeholders are production-ready and look professional. You can launch without images and add them later.
