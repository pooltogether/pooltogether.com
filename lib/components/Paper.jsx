// import React, { useEffect } from 'react'


// export const Paper = (
//   props,
// ) => {

  
//   useEffect(() => {
//     const newScope = () => { }
//     // paper.install(window);
//     // paper.install(newScope);
//     // console.log(newScope)
//     // console.log(newScope())

//     const canvas = document.getElementById('myCanvas');
//     paper.install(canvas)
//     paper.setup(canvas)



//     var values = {
//       friction: 0.9,
//       timeStep: 1,
//       amount: 20,
//       mass: 1,
//       count: 0
//     };
//     values.invMass = 1 / values.mass;

//     var path, springs;
//     const view = canvas.view
//     // console.log({ view})
//     var size = view.size * [1.2, 1];

//     var Spring = function (a, b, strength, restLength) {
//       this.a = a;
//       this.b = b;
//       this.restLength = restLength || 80;
//       this.strength = strength ? strength : 0.55;
//       this.mamb = values.invMass * values.invMass;
//     };

//     Spring.prototype.update = function () {
//       var delta = this.b - this.a;

//       var dist = delta.length;
//       var normDistStrength = (dist - this.restLength) /
//         (dist * this.mamb) * this.strength;

//       delta.y *= normDistStrength * values.invMass * 0.2;

//       if (!this.a.fixed)
//         this.a.y += delta.y;
//       if (!this.b.fixed)
//         this.b.y -= delta.y;
//     };


//     function createPath(strength) {
//       var path = new canvas.Path({
//         fillColor: 'orange'
//       });

//       springs = [];

//       for (var i = 0; i <= values.amount; i++) {
//         var segment = path.add(new canvas.Point(i / values.amount, 0.5));
//         // var segment = path.add(new canvas.Point(i / values.amount, 0.5) * size);
//         console.log({segment})

//         var point = segment.point;
//         console.log({ point})

//         if (i == 0 || i == values.amount)
//           point.y += size.height;

//         point.px = point.x;
//         point.py = point.y;
//         // The first two and last two points are fixed:
//         point.fixed = i < 2 || i > values.amount - 2;

//         if (i > 0) {
//           // console.log({ point: segment.previous.point })
//           // console.log({ point })

//           var spring = new Spring(segment.previous.point, point, strength);
//           springs.push(spring);
//         }
//       }
//       path.position.x -= size.width / 4;
//       return path;
//     }

//     window.addEventListener('resize', () => {
//       if (path)
//         path.remove();
//       size = view.bounds.size * [2, 1];
//       path = createPath(0.1);
//       // console.log(path)
//     })

//     function onMouseMove(event) {
//       var location = path.getNearestLocation(event.point);
//       var segment = location.segment;
//       var point = segment.point;

//       if (!point.fixed && location.distance < size.height / 4) {
//         var y = event.point.y;
//         point.y += (y - point.y) / 6;
//         if (segment.previous && !segment.previous.fixed) {
//           var previous = segment.previous.point;
//           previous.y += (y - previous.y) / 24;
//         }
//         if (segment.next && !segment.next.fixed) {
//           var next = segment.next.point;
//           next.y += (y - next.y) / 24;
//         }
//       }
//     }

//     canvas.view.onFrame = (event) => {
//       if (path) {
//         updateWave(path);
//       }
//     }
//     createPath(0.1)

//     function updateWave(path) {
//       // console.log('updateWave')
//       // console.log(path)

//       var force = 1 - values.friction * values.timeStep * values.timeStep;
//       for (var i = 0, l = path.segments.length; i < l; i++) {
//         var point = path.segments[i].point;
//         var dy = (point.y - point.py) * force;
//         point.py = point.y;
//         point.y = Math.max(point.y + dy, 0);
//       }

//       for (var j = 0, l = springs.length; j < l; j++) {
//         springs[j].update();
//       }
//       path.smooth({ type: 'continuous' });
//     }

//     // function onKeyDown(event) {
//     //   if (event.key == 'space') {
//     //     path.fullySelected = !path.fullySelected;
//     //     path.fillColor = path.fullySelected ? null : 'black';
//     //   }
//     // }






//       // const canvas = () => { }
//       // paper.install(newScope);

//       // const canvas = document.getElementById('myCanvas');

//       // paper.setup(canvas);


//       // var values = {
//       //   friction: 0.9,
//       //   timeStep: 1,
//       //   amount: 20,
//       //   mass: 1,
//       //   count: 0
//       // };
//       // values.invMass = 1 / values.mass;

//       // var path, springs;
//       // var size = newScope.view.size;
//       // console.log({ size })
//       // // var size = newScope.view.bounds.size * [1.2, 1];
//       // // console.log(size)

//       // var Spring = function (a, b, strength, restLength) {
//       //   this.a = a;
//       //   this.b = b;
//       //   this.restLength = restLength || 80;
//       //   this.strength = strength ? strength : 0.55;
//       //   this.mamb = values.invMass * values.invMass;
//       // };

//       // Spring.prototype.update = function () {
//       //   var delta = this.b - this.a;
//       //   console.log(this)
//       //   console.log(delta)
//       //   var dist = delta.length;
//       //   var normDistStrength = (dist - this.restLength) /
//       //     (dist * this.mamb) * this.strength;

//       //   delta.y *= normDistStrength * values.invMass * 0.2;

//       //   if (!this.a.fixed)
//       //     this.a.y += delta.y;
//       //   if (!this.b.fixed)
//       //     this.b.y -= delta.y;
//       // };


//       // function createPath(strength) {
//       //   path = new newScope.Path({
//       //     fillColor: 'orange'
//       //   });
//       //   console.log({ path })

//       //   springs = [];

//       //   console.log(newScope.Point)
//       //   for (var i = 0; i <= values.amount; i++) {
//       //     var segment = path.add(
//       //       new newScope.Point(i / values.amount, 0.5)
//       //     )

//       //     // var segment = path.add(new newScope.Point(i / values.amount, 0.5) * size);
//       //     var point = segment.point;

//       //     console.log({size})
          
//       //     if (i == 0 || i == values.amount) {
//       //       point.y += size.height;
//       //     }

//       //     point.px = point.x;
//       //     point.py = point.y;

//       //     // The first two and last two points are fixed:
//       //     point.fixed = i < 2 || i > values.amount - 2;

//       //     if (i > 0) {
//       //       var spring = new Spring(segment.previous.point, point, strength);
//       //       springs.push(spring);
//       //     }
//       //   }
//       //   path.position.x -= size.width / 4;
//       //   return path;
//       // }
//       // createPath(0.1)

//       // window.addEventListener('resize', function () {
//       //   if (path)
//       //     path.remove();
//       //   console.log(newScope.view.bounds)

//       //   size = newScope.view.size;
//       //   path = createPath(0.1);
//       // })

//       // newScope.onMouseMove = function(event) {
//       //   var location = path.getNearestLocation(event.point);
//       //   var segment = location.segment;
//       //   var point = segment.point;

//       //   if (!point.fixed && location.distance < size.height / 4) {
//       //     var y = event.point.y;
//       //     point.y += (y - point.y) / 6;
//       //     if (segment.previous && !segment.previous.fixed) {
//       //       var previous = segment.previous.point;
//       //       previous.y += (y - previous.y) / 24;
//       //     }
//       //     if (segment.next && !segment.next.fixed) {
//       //       var next = segment.next.point;
//       //       next.y += (y - next.y) / 24;
//       //     }
//       //   }
//       // }


//       // newScope.view.updateWave = function (path) {
//       //   var force = 1 - values.friction * values.timeStep * values.timeStep;
//       //   var pathSegmentsLength = path.segments.length
//       //   for (var i = 0; i < pathSegmentsLength; i++) {
//       //     var point = path.segments[i].point;
//       //     var dy = (point.y - point.py) * force;
//       //     point.py = point.y;
//       //     point.y = Math.max(point.y + dy, 0);
//       //   }

//       //   const springLength = springs.length

//       //   for (var j = 0; j < springLength; j++) {
//       //     springs[j].update();
//       //   }

//       //   path.smooth({ type: 'continuous' })
//       // }


//       // newScope.view.onFrame = function (event) {
//       //   // console.log('new frame')
//       //   if (path) {
//       //     newScope.view.updateWave(path);
//       //   }
//       // }
//     // createPath(0.2)


//     // newScope.view.onKeyDown = function(event) {
//     //   if (event.key == 'space') {
//     //     path.fullySelected = !path.fullySelected;
//     //     path.fillColor = path.fullySelected ? null : 'black';
//     //   }
//     // }


//   }, [])

//   return <>
//     <canvas id="myCanvas" resize='true'></canvas>


//     {/* <script canvas='canvas' type="text/paperscript" src="/paper-waves.js"></script> */}
//     {/* <script type="text/javascript" src="/paper-waves.js"></script> */}
//   </>
// }
