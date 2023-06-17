import im1 from "../../../assets/Icon-1.svg";
import im2 from "../../../assets/Icon-2.svg";
import im3 from "../../../assets/Icon-3.svg";
import im4 from "../../../assets/Icon-4.svg";



interface Data {
	img: string;
	paragraf1: string;
	paragraf2: string;
}

const DataToDo: Data[] = [
	{
		img: im1,
		paragraf1: `Wybierz rzeczy`,
		paragraf2: `ubrania, zabawki, sprzęt i inne`,
	},
	{
		img: im2,
		paragraf1: 'Spakuj je',
		paragraf2: 'skorzystaj z worków na śmieci',
	},
	{
		img: im3,
		paragraf1: 'Zdecyduj komu chcesz pomóc',
		paragraf2: 'wybierz zaufane miejsce',
	},
	{
		img: im4,
		paragraf1: 'Zamów kuriera',
		paragraf2: 'kurier przyjedzie w dogodnym terminie',
	},
];

export default DataToDo;
