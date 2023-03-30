export class TacheModel {
    static nbr: number=0;
    public id!: number;
    constructor(private libelle: string,  private etat: string){ this.id=++TacheModel.nbr}
    get getId() : number { return this.id; }
    get getLibelle() : string { return this.libelle; }
    set setLibelle(libelle : string) { this.libelle = libelle; }
    get getEtat() : string { return this.etat; }
    set setEtat(etat : string) { this.etat = etat;}
}

