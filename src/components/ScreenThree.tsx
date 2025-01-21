import testimg from '../assets/test2.jpg';

// TODO: Verzin iets voor deze pagina

export default function ScreenThree() {
    return (
        <div className='flex flex-row justify-evenly'>
        <div>
        <h1 className="text-5xl max-w-96 p-4 text-left">Kijk naar deze hele mooie pagina!!</h1>
        <p className="text-3xl text-left max-w-96 mt-8 p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio soluta facere, aliquam eius quibusdam beatae ad dignissimos qui perferendis reiciendis! Beatae est dolore ducimus modi, at nihil quasi quas.</p>
        </div>
        <div>
            <img src={testimg} alt="React" />
        </div>
        </div>
    );
}