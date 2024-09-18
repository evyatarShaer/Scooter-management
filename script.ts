import { Scooter } from './scooter';


const scooter_url = "https://66ea929f55ad32cda47979eb.mockapi.io/api/v1/scooters";


const createScooter = async (scooter:Scooter):Promise<void> => {
    try{
    const response = await fetch(scooter_url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(scooter)
    });
    if (!response.ok){
        throw new Error("is not ok");
    }
    console.log('scooter created');
    
    }
    catch(error){
        console.log(error)
    }
}


const newScooter: Scooter = {
    serialNumber: "ABC123",
    model: "Honda Civic",
    betteryLevel: 75,
    imageUrl: "https://example.com/image1.jpg",
    color: "blue",
    status: "available"
}

//console.log(createScooter(newScooter));




const getScooters = async (): Promise<Scooter[]> => {
    const response = await fetch(`${scooter_url}`);

    if (!response.ok) {
        throw new Error('Failed to fetch scooters');
    }

    return response.json();
}

//console.log(getScooters());


const updateScooter = async (scooter: Scooter): Promise<Scooter> => {
    const response = await fetch(`${scooter_url}/${scooter.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(scooter),
    });

    if (!response.ok) {
        throw new Error('Failed to update scooter');
    }
    console.log('Scooter updated successfully');
    
    return response.json();
}

const upScooter: Scooter = {
    id: "1",
    serialNumber: "ABC123",
    model: "Honda stam",
    betteryLevel: 75,
    imageUrl: "https://example.com/image1.jpg",
    color: "blue",
    status: "available"
}

//updateScooter(upScooter);

const deleteScooter = async (scooterId: string): Promise<void> => {
    const response = await fetch(`${scooter_url}/${scooterId}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Failed to delete scooter');
    }
    console.log('Scooter deleted successfully');
}

//deleteScooter("1");