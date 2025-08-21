import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);
import { contact } from "../../data/data.json"

export function InfoContacto(){
    return(
        <div className="w-full flex flex-col gap-3 bg-white hover:shadow-md transition-shadow duration-300 p-4 rounded-2xl">
        <div className="">
        <h1 className="text-2xl font-bold mb-2">Información de Contacto</h1>
        </div>
        <div className="space-y-6">
            {contact.map((item, index) => (
                <div className="flex items-center gap-3" key={index}>
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <FontAwesomeIcon
                        className="w-6 h-6 text-blue-500"
                        icon={[item.icon.split(" ")[0], item.icon.split(" ")[1].replace("fa-", "")]}
                        />
                    </div>
                    <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}