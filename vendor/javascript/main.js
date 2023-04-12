
class Item {
    constructor(name) {
      this.name = name;
    }

    save() {
      fetch('/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify({
          item: {
            name: this.name
          }
        })
      }).then(response => {
        console.log(response);
      });
    }
  }

