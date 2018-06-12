import 'jointjs/dist/joint.css';
import '../css/joint.ui.freeTransform.css';
import '../css/joint.ui.selectionView.css';
import '../css/joint.ui.paperScroller.css';
import '../css/joint.ui.tooltip.css';
import '../css/joint.ui.halo.css';
import '../css/joint.format.print.css';

// Load Rappid (jointjs extensions)
import 'imports-loader?exports=>false&joint&_=lodash!string-replace-loader?search=require&replace=false&flags=g!./joint.shapes.uml';
import 'imports-loader?joint&Backbone=backbone1.0&V=>joint.V&g=>joint.g!string-replace-loader?search=this\\["joint"\\]&replace=joint&flags=g!./joint.ui.halo';
import 'imports-loader?joint&g=>joint.g!./joint.dia.freeTransform';
import 'imports-loader?joint&Backbone=backbone1.0&g=>joint.g!string-replace-loader?search=this\\["joint"\\]&replace=joint&flags=g!./joint.ui.freeTransform';
import 'imports-loader?joint&Backbone=backbone1.0!string-replace-loader?search=this\\["joint"\\]&replace=joint&flags=g!./joint.ui.inspector';
import 'imports-loader?joint&Backbone=backbone1.0&V=>joint.V!./joint.ui.selectionView';
import 'imports-loader?joint!./joint.ui.clipboard';
import 'imports-loader?joint&Backbone=backbone1.0&V=>joint.V&g=>joint.g!string-replace-loader?search=this\\["joint"\\]&replace=joint&flags=g!./joint.ui.stencil';
import 'imports-loader?joint&Backbone=backbone1.0&V=>joint.V!./joint.ui.paperScroller';
import 'imports-loader?joint&Backbone=backbone1.0&V=>joint.V!./joint.ui.tooltip';
import 'imports-loader?joint&V=>joint.V!./joint.format.svg';
import 'imports-loader?joint!./joint.format.raster';
import 'imports-loader?joint&V=>joint.V!./joint.format.print';
import 'imports-loader?joint!./joint.dia.command';
import 'imports-loader?joint!./joint.dia.validator';
import 'imports-loader?joint!./joint.layout.ForceDirected';
import 'imports-loader?joint!./joint.layout.GridLayout';
import 'imports-loader?joint&g=>joint.g!./joint.layout.DirectedGraph';
