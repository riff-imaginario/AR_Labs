
window.addEventListener('camera-init', (data) => {
  console.log('camera-init', data);
});

AFRAME.registerComponent('my-event', {
    init: function() {

        let marker  = this.el;
        let sceneEl = document.querySelector('a-scene');  // Take the scene

        // Take objects
        let box      = document.querySelector('#box');
        let menu     = sceneEl.querySelector('#plane');
        let menuText = sceneEl.querySelector('#text');
        let button   = sceneEl.querySelector('#button-menu');

        //box.setAttribute('color', 'red');

        // Hide objects
        //menu.setAttribute('visible', false);
        //menuText.setAttribute('visible', false);


        marker.addEventListener('markerFound', function() {
            //box.setAttribute('color', "orange");  // Change the object color
            //menu.setAttribute('visible', true);
            //menuText.setAttribute('visible', true);

            menu.setAttribute('color', 'black');
            let description = document.createElement('a-plane');
            description.setAttribute('color', 'darkred');
            description.setAttribute('rotation', {x: -90, y: 0, z: 0});
            description.setAttribute('text', 'value: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend ultricies leo et mollis. Integer et metus sit amet nisi tincidunt sodales eu non nisl. Nullam vitae felis vehicula, rhoncus erat et, viverra nisi. Praesent convallis nunc in eleifend vulputate. In eget efficitur elit. In malesuada mi vitae dolor viverra ultricies non non elit. Curabitur justo quam, sagittis dapibus finibus eget, tincidunt sit amet ipsum. Morbi et augue gravida, consequat libero non, sodales nisl. Quisque luctus sem eu quam tempor maximus. Phasellus sed arcu a sapien sagittis vehicula quis vitae sem. Duis ac quam nec mi lobortis imperdiet eu eget nibh. Fusce ac cursus mauris.');
            sceneEl.appendChild(description);
        });

        marker.addEventListener('markerLost', function() {
            menu.setAttribute('color', 'black');
            //sceneEl.removeElement('box')

            let description = document.createElement('a-plane');
            description.setAttribute('color', 'darkred');
            //description.setAttribute('position', {x: 0.5, y: 0, z: 0});
            //description.setAttribute('scale', '1 2 1');
            description.setAttribute('text', 'value: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend ultricies leo et mollis. Integer et metus sit amet nisi tincidunt sodales eu non nisl. Nullam vitae felis vehicula, rhoncus erat et, viverra nisi. Praesent convallis nunc in eleifend vulputate. In eget efficitur elit. In malesuada mi vitae dolor viverra ultricies non non elit. Curabitur justo quam, sagittis dapibus finibus eget, tincidunt sit amet ipsum. Morbi et augue gravida, consequat libero non, sodales nisl. Quisque luctus sem eu quam tempor maximus. Phasellus sed arcu a sapien sagittis vehicula quis vitae sem. Duis ac quam nec mi lobortis imperdiet eu eget nibh. Fusce ac cursus mauris.');
            sceneEl.appendChild(description);
        });

        //button.addEventListener('click', function() {
            //box.setAttribute('color', 'orange');
        //});
    }
});
