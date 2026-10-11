        function initMap() {
            const initialPos = { lat: 40.7128, lng: -74.0060 }; // NYC

            // Create map
            const map = new google.maps.Map(document.getElementById("map"), {
                center: initialPos,
                zoom: 12,
            });

            // Marker
            const marker = new google.maps.Marker({
                map: map,
                position: initialPos,
            });

            // Search input
            const input = document.getElementById("search-input");
            const autocomplete = new google.maps.places.Autocomplete(input);

            autocomplete.bindTo("bounds", map);

            // When user selects a place
            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();

                if (!place.geometry) {
                    alert("No details available for input: '" + place.name + "'");
                    return;
                }

                // Move map to that place
                map.setCenter(place.geometry.location);
                map.setZoom(15);

                // Move marker
                marker.setPosition(place.geometry.location);
            });
        }