import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Nos réseaux sociaux</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <p>
                Les articles de xboxygen.com (sauf Tests en BY-NC-ND) sont mis à disposition selon les termes de la 
                <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.fr"> licence Creative Commons : Paternité - Pas d'Utilisation Commerciale - Partage des Conditions Initiales à l'Identique 3.0 Unported </a>
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Xboxygen vous conseille :</h6>
              <p>
                <a href='#!' className='text-reset'>
                    Casque Xbox Series X/S et Xbox One : les meilleurs modèles tous budgets
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                TV Xbox Series X / PS5 - les meilleurs TV 4K et 8K pour le jeu vidéo
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Liens Utiles</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Le Forum
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  La Redac'
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Les Flux RSS
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Plan du site
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  A propos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Partenaire
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Conception
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <p>
                Xboxygen est un magazine en ligne dédié à la console Xbox One. On y découvre toute l’actualité Xbox One et tout ce qui concerne les jeux Xbox One ou le Xbox Live, le service de jeu en ligne sur console Xbox. Xboxygen vous aide également dans vos choix avec des Tests de jeux 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://xboxygen.com/'>
          Xboxygen.com
        </a>
      </div>
    </MDBFooter>
  );
}